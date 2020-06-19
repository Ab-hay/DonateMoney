import AWS from 'aws-sdk';
import LoggerFactory from './logger';
import Dotenv from 'dotenv';
import moment from 'moment';

Dotenv.config();

AWS.config.update({
    region: 'us-east-2',
    accessKeyId: process.env.DDB_ACCESS_KEY,
    secretAccessKey: process.env.DDB_SECRET_KEY
});

let logger = LoggerFactory.getLogger();

let dynamodbClient = new AWS.DynamoDB.DocumentClient({
    params: {
        region: 'us-east-2',
        endpoint: 'https://dynamodb.us-east-2.amazonaws.com',
        accessKeyId: process.env.DDB_ACCESS_KEY,
        secretAccessKey: process.env.DDB_SECRET_KEY
    }
})

const BURNER_TABLE_NAME = 'Burners';
const PENDING_TXN_TABLE_NAME = 'PendingTranactions';
const TOTAL_BURNED_TABLE_NAME = 'TotalBurnedByTime';

const ADDRESS_FIELD = 'address';
const TIME_FIELD = 'currentTime';
const TXN_HASH_FIELD = 'txn_hash';
const NAME_FIELD = 'name';
const AMOUNT_BURNED_FIELD = 'amountBurned';
const TOTAL_AMOUNT_BURNED_FIELD = 'totalBurned';
const AD_FIELD = 'advertisement';
const CREATED_AT_FIELD = 'createdAt';
const SETTLED_FIELD = 'settled';

/*
 * Creates a new burner profile or updates their advertisement if they already exist
 *
 * params: address - wallet address of burner
 *         name - name of burner specified by them
 *         advertisement - the ad they want to put out
 * returns: data object from the ddb record
 */
// TODO this might be deleted since we're using lambdas
async function addBurn(address: String, name: String, advertisement: String, txnHash: String) {
    // TODO: need to make sure that we have a max limit for advertisement string length
    logger.info('attempting to add burner with address: ' + address 
        + 'and advertisement: ' + advertisement + ' from dynamodb');
    try {
        let gotBurner = await getBurner(address);
        logger.info(`Got burner successfully with address: ${address}`);

        // TODO if not found, would prob throw error and not null
        if (gotBurner == null) {
            let newUserParams = {
                TableName: BURNER_TABLE_NAME,
                Item: {
                    [ADDRESS_FIELD]: address,
                    [NAME_FIELD]: name,
                    [AD_FIELD]: advertisement,
                    [CREATED_AT_FIELD]: Date.now()
                }
            }
            // TODO some kind of actual return here
            dynamodbClient.put(newUserParams, function(err, data) {
                if (err) {
                    // TODO handle
                    logger.error('addBurn produced an error: ' + err);
                } else {
                    logger.info('added burner successfully with address: ' + address);
                    return data;
                }
            });
        } 
        enqueuePendingTransaction(address, txnHash, advertisement);
    } catch (error) {
        
    }
}

async function enqueuePendingTransaction(address: String, txnHash: String, advertisement: String) {
    let pendingTxnParams = {
        TableName: PENDING_TXN_TABLE_NAME,
        Item: {
            [TXN_HASH_FIELD]: txnHash,
            [ADDRESS_FIELD]: address,
            [AD_FIELD]: advertisement,
            [CREATED_AT_FIELD]: Date.now(),
            [SETTLED_FIELD]: false
        }
    }
    // TODO some kind of actual return here
    dynamodbClient.put(pendingTxnParams, function(err, data) {
        if (err) {
            // TODO handle
            logger.error('enqueueing pending transaction produced an error: ' + err);
        } else {
            logger.info('enqueued pending transaction successfully with txnHash: ' + txnHash);
            return data;
        }
    });
}

/*
 * Gets the record for the burner by their unique wallet address
 *
 * params: address - wallet address of burner
 * returns: data object from the ddb record
 */
async function getBurner(address: String) {
    logger.info('attempting to get burner with address: ' + address);
    let params = {
        TableName: BURNER_TABLE_NAME,
        Key: {
            [ADDRESS_FIELD]: address // TODO not sure about what the value should be here
        }
    }

    return dynamodbClient.get(params).promise();
}

/*
 * Updates the actual balance of the amount burned after we receive confirmation
 * from the ethereum chain
 *
 * params: address - wallet address of burner
 *         amount - the amount in which was burned in ETH (not wei)
 * returns: the new data object
 */
async function settleBurnAmount(address: String, amount: Number, txnHash: String) {
    try {
        logger.info('attempting to settle burn amount with address: ' + address);
        let gotPendingTxn = await getPendingTransaction(txnHash);
        logger.info(`got pending transaction successfully with txnHash: ${txnHash}`);

        if (gotPendingTxn == null ) {
            logger.error(`Could not find pending transaction with hash: ${txnHash} when trying to settle their burn`);
            // TODO handle
            // something went wrong, there should be some kind of pending txn
        } else {
            // TODO technically can fail on any of these steps meaning there
            // needs to be recovery logic based on where it failed. 
            updateUserWithPendingTxn(gotPendingTxn.Item, amount);
            logger.info(`Updated user with pendint Transaction successfully with address: ${address}`);

            closePendingTxn(gotPendingTxn.Item);
            logger.info(`Closed pending transaction successfully with txnHash: ${txnHash}`);

            updateTotalBurnedPerDay(amount, new Date());

        }
    } catch(error) {
        logger.error(`Unexpected error while trying to settleBurnAmount: ${error}`);
    }
}

async function getPendingTransaction(txnHash: String) {
    logger.info('attempting to get pending txn with txnHash: ' + txnHash);
    let params = {
        TableName: PENDING_TXN_TABLE_NAME,
        Key: {
            [TXN_HASH_FIELD]: txnHash
        }
    }

    return dynamodbClient.get(params).promise()
}

async function closePendingTxn(pendingTxn: any) {
    let txnHash = pendingTxn.txn_hash;
    logger.info('attempting to close pending txn: ' + txnHash);

    var params = {
        TableName: PENDING_TXN_TABLE_NAME,
        Key: {
            [TXN_HASH_FIELD]: txnHash
        },
        UpdateExpression: 'SET #curSettled = :newSettled', 
        ExpressionAttributeNames: {
            '#curSettled': SETTLED_FIELD
        },
        ExpressionAttributeValues: {
            ':newSettled': true
        },
        ReturnValues: 'ALL_NEW'
    };
    return dynamodbClient.update(params).promise()
}


// Add the cur burn amount with new burn amount
// also overrides ad value in ddb Burners Table
// pendingTxn is of type GetItemOutput
async function updateUserWithPendingTxn(pendingTxn: any, amount: Number) {
    let address = pendingTxn.address;
    let advertisement = pendingTxn.advertisement;
    let settled = pendingTxn.settled;

    // if its already settled, do nothing
    if (settled === true) {
        return
    }

    logger.info('attempting to update burn amount and advertisement with address: ' + address);
    var params = {
        TableName: BURNER_TABLE_NAME,
        Key: {
            [ADDRESS_FIELD]: address
        },
        UpdateExpression: 'SET #curAd = :newAd ADD #curAmount :moreAmount',
        ExpressionAttributeNames: {
            '#curAmount': AMOUNT_BURNED_FIELD,
            '#curAd': AD_FIELD
        },
        ExpressionAttributeValues: {
            ':moreAmount': amount,
            ':newAd': advertisement
        },
        ReturnValues: 'ALL_NEW'
    };

    return dynamodbClient.update(params).promise();
}

async function updateTotalBurnedPerDay(amount: Number, curDate: Date) {
    let currentTime: string = moment(curDate).format('YYYYMMDD');

    logger.info(`attempting to update the total burned amount for a given time: ${currentTime}`);
    let params = {
        TableName: TOTAL_BURNED_TABLE_NAME,
        Key: {
            [TIME_FIELD]: currentTime
        },
        UpdateExpression: 'ADD #amountBurned :moreAmount',
        ExpressionAttributeNames: {
            '#amountBurned': TOTAL_AMOUNT_BURNED_FIELD,
        },
        ExpressionAttributeValues: {
            ':moreAmount': amount,
        },
        ReturnValues: 'ALL_NEW'
    };

    return dynamodbClient.update(params).promise();
}


// TODO overall: 1. updates can be moved to just a single function and have the
// parameters for updating be passed in. Doing this now since it's just easier
//               2. race conditions are not considered

export { addBurn, getBurner, settleBurnAmount }
