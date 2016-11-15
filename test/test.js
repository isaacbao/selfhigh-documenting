'use strict'
const apiController = require('../controller/api_controller.js')
const fs = require('fs')
const random = require('../utils/randomUtil')
const originDocument = require('./data/newDocument.json')
const newAPI = require('./data/newAPI.json')
const generator = require('../controller/html_generator_controller.js')
const fileUtil = require('../utils/file_util.js')
const cheerio = require('cheerio')
const async = require('asyncawait/async')
const Await = require('asyncawait/await')

let documentId = 'DJWYrja5'

function testCreateDocument() {
  apiController.createDocument(null, null, null, documentId, originDocument)
}

function testAddApi() {
  apiController.addAPI(null, null, null, newAPI, documentId)
}

let testGetDocument = function () {
  apiController.getDocument(documentId)
}

// console.log('create document')
// testCreateDocument()
// console.log('add api')
// testAddApi()
testGetDocument()
  // testGenerateHtml()
