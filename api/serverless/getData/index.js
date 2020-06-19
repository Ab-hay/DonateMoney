const config = require('./config');
var vogels = require('vogels');
const Joi = require('joi');
var Promise = require("bluebird");
var AWS = vogels.AWS;

AWS.config.update({accessKeyId: config.config.accessKeyId , secretAccessKey: config.config.secretAccessKey, region: config.config.region , endpoint: "https://dynamodb.us-east-2.amazonaws.com"});
vogels.dynamoDriver(new vogels.AWS.DynamoDB({ endpoint: "https://dynamodb.us-east-2.amazonaws.com" }));


const BURNER_TABLE_NAME = "BurnerRecords";
const BURNER_TABLE_TRANSACTIONS ="PendingTranactions";
const header = {
  'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
  'Access-Control-Allow-Origin': '*',
};

const response = {
  statusCode: 200,
  headers: header,
  body: JSON.stringify({
    statusCode: "ok",
  }),
};

const BurnerModel = vogels.define('BurnerModel', {
  hashKey : 'pubkey',
  schema : {
    pubKey   : Joi.string().min(40).max(42, 'utf-8'),
    burnerName: Joi.string().max(42),
    advertisement: Joi.string().required(),
    totalBurntAmount: Joi.number().required()
  },
  tableName: BURNER_TABLE_NAME
});

const BurnerTransactionModel = vogels.define('BurnerTransactionModel',{
  hashKey : 'txn_hash',
  schema:{
    address: Joi.string().min(40).max(42, 'utf-8'),
    advertisement: Joi.string().required(),
    settled: Joi.boolean().required(),
    txn_hash: Joi.string().min(40).required(),
    timeStamp: Joi.number().required(),
    burnerName: Joi.string().max(42)
  },
  tableName: BURNER_TABLE_TRANSACTIONS
});

exports.addNewBurnRecord = async (event, context, callback) => {
  const requestData = JSON.parse(event.body);
  try {
    var date = Date.now();
    console.log(date);
    await createRecord({address: requestData.address.toUpperCase(), advertisement: requestData.advertisement, settled: false, txn_hash: requestData.txn_hash, burnerName: requestData.name, timeStamp: Date.now()})
  return response;
  } catch (err) {
    callback(err, null);
    return;
  }
};

exports.getLeaderBoard = async (event, context, callback) => {
  try {
    const tableItems = await getTableItems();
    return {
      statusCode: 200,
      headers: header,
      body: JSON.stringify({
        statusCode: "ok",
        result: tableItems
      }),
    }
  } catch (err) {
      callback(err, null);
      return;
  }
};

function getTableItems() {
  return new Promise(function(resolve, reject) {
    BurnerModel.scan().loadAll().limit(100).exec(
      function(err, data) {
        if (err !== null) reject(err);
        else resolve(data);
    });
  });
}

exports.getAllValidTransactions= async (event, context, callback) => {
  try {
    const tableItems = await getTableItemsTransactions();
    return {
      statusCode: 200,
      headers: header,
      body: JSON.stringify({
        statusCode: "ok",
        result: tableItems
      }),
    }
  } catch (err) {
      callback(err, null);
      return;
  }
};

function getTableItemsTransactions() {
  return new Promise(function(resolve, reject) {
    BurnerTransactionModel.scan().where("settled").equals(true).loadAll().exec(
      function(err, data) {
        if (err !== null) reject(err);
        else resolve(data);
    });
  });
}

function createRecord(param) {
  return new Promise(function(resolve, reject) {
      BurnerTransactionModel.create(param, function(err, data) {
          if (err !== null) reject(err);
          else resolve(data);
      });
  });
}