import express from 'express';
import * as http from 'http';
import Web3 from 'web3';
import LoggerFactory from './logger';

import { settleBurnAmount } from './ddb';

let logger = LoggerFactory.getLogger();

// === create app and server === //
const app = express();
const server = http.createServer(app); //initialize a simple http server

//initialize the WebSocket server instance of Web3

const ROPSTEN_WSS = `wss://ropsten.infura.io/ws/51e92f2b1d434d66839bd473ee522717`;
const MAIN_WSS = `wss://mainnet.infura.io/ws/51e92f2b1d434d66839bd473ee522717`;
const CURRENT_WSS = ROPSTEN_WSS;
const contractAddress = '0xbEF62AD87c21F589fA522B67D7Cc8d7008027FdA'

var provider = new Web3.providers.WebsocketProvider(CURRENT_WSS);
var web3 = new Web3(provider);

provider.on('error', () => {
    logger.error(`Websocket caught an error`);
    reconnectWebSocket();
});

provider.on('end', () => {
    logger.error('Websocket is closed');
    reconnectWebSocket();
});

/*
 * Attemps to reconnect to the infura websocket if we get a disconnect.
 * Also re-subscribes to the contract events
 */
function reconnectWebSocket() {
    logger.info('Attempting to reconnect...');
    provider = new Web3.providers.WebsocketProvider(CURRENT_WSS);

    provider.on('connect', () => {
        logger.info('Websocket reconnected');
    });

    web3.setProvider(provider);
    // resubscribe to event to make sure we get events
    subscribeToContractEvent(contractAddress);
}

/*
 * Subscribes to the contract address events
 */

function subscribeToContractEvent(contractAddress: string) {
    // subscribing to events from our smart contract
    web3.eth.subscribe('logs', { 
        address: contractAddress
        //topics: ['0x12345...']
    }, function(error, result) { 
        if (error != null) { 
            logger.error(`error getting logs from eth: ${error}`); 
        } 
    }).on("data", function(log) { 
        // This means we got a "settlement" for the ETH transaction.
        logger.info('data'); 
        logger.info(log); 

        let burnerAddressExtracted = log.topics[1].substring(26).toUpperCase(); // extracts the address correctly
        let burnerAddress= '0X' + burnerAddressExtracted;
        let amountInWei = web3.utils.fromWei(web3.utils.toBN(log.topics[2]).toString(), 'ether');
        let burnAmount = parseFloat(amountInWei);
        let txnHash = log.transactionHash.toLowerCase();

        settleBurnAmount(burnerAddress, burnAmount, txnHash);
    }).on("changed", function(log) { 
        // TODO not sure what this would mean for our app
        logger.info(`changed got from eth logs: ${log}`); 
    }); 
}

subscribeToContractEvent(contractAddress);

function pollConnection() {
    web3.eth.net.isListening().then(res => {
        if (res == false) {
            logger.error('Websocket was closed for whatever reason');
            reconnectWebSocket();
        }
    }).catch(err => {
        logger.error(`Error when getting isListening ${err}`);
        reconnectWebSocket();
    });
}

// Poll the websocket to make sure it stays alive
setInterval(pollConnection, 5000);

//start our server
server.listen(process.env.PORT || 8999, () => {
    let serverAddress = server.address();
    logger.info('Server started');
    console.log(`Server started on port ${serverAddress} :)`);
});

// EVENT EMITTED STRUCTURE
/*
 * {
  removed: false,
  logIndex: 16,
  transactionIndex: 25,
  transactionHash: '0xbed0ed0e3a8e2e5d22351308ce08c667d10345bea67b94db1fde96c03437cb9c',
  blockHash: '0x1c11ce57f23c11e7d058c70a0d3fae02dff72c1fb764d9b307ed2c0701a7b86a',
  blockNumber: 7044596,
  address: '0xbEF62AD87c21F589fA522B67D7Cc8d7008027FdA',
  data: '0x',
  topics: [
    '0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5',
    '0x0000000000000000000000000d1197559f4df0e870563f9d007c5c438ffc63f7',
    '0x000000000000000000000000000000000000000000000000006a94d74f430000'
  ],
  id: 'log_041575b7'
}
error
{
  removed: false,
  logIndex: 16,
  transactionIndex: 25,
  transactionHash: '0xbed0ed0e3a8e2e5d22351308ce08c667d10345bea67b94db1fde96c03437cb9c',
  blockHash: '0x1c11ce57f23c11e7d058c70a0d3fae02dff72c1fb764d9b307ed2c0701a7b86a',
  blockNumber: 7044596,
  address: '0xbEF62AD87c21F589fA522B67D7Cc8d7008027FdA',
  data: '0x',
  topics: [
    '0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5',
    '0x0000000000000000000000000d1197559f4df0e870563f9d007c5c438ffc63f7',
    '0x000000000000000000000000000000000000000000000000006a94d74f430000'
  ],
  id: 'log_041575b7'
}
 */
