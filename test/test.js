'use strict'
const apiController = require('../controller/api_controller.js')
const fs = require('fs')
const random = require('../utils/randomUtil')
const originDocument = require('./data/newDocument.json')
const newAPI = require('./data/newAPI.json')

let documentId = 'DJWYrja5'

function testCreateDocument() {
  apiController.createDocument(documentId, originDocument)
}

function testAddApi() {
  apiController.addAPI(newAPI, documentId)
}

function testGetDocument() {
  apiController.getDocument(documentId)
}

console.log('create document')
testCreateDocument()

console.log('add api')
testAddApi()

console.log('read document')
testGetDocument()
