'use strict';
const redis = require('redis');
const util = require('util')
const apiController = require('../controllers/api_controller.js');
const fs = require('fs');
const originDocument = require('./data/newDocument.json');
const newAPI = require('./data/newAPI.json');
const cheerio = require('cheerio');
const async = require('asyncawait/async');
const Await = require('asyncawait/await');

let documentId = 'DJWYrja5';

function testCreateDocument() {
  apiController.createDocument(null, null, null, documentId, originDocument)
}

function testAddApi() {
  apiController.addAPI(request, null);
}

let testGetDocument = async(function () {
  let document = Await(apiController.getDocumentById(request.app.locals.redisClient, request.body.documentId));
    // fs.writeFileSync('./output/documentOut.json', document)
  let documentJson = JSON.parse(document);
  console.log('documentJson:' + util.inspect(documentJson))
});


let request = {};
request.app = {};
request.app.locals = {};
request.app.locals.redisClient = redis.createClient();

request.body = {
  api: newAPI,
  documentId: documentId
};

// console.log('create document')
// testCreateDocument()
// console.log('add api')
  // testAddApi()
testGetDocument();
