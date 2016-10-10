'use strict'
const apiController = require('../controller/api_controller.js')
const fs = require('fs')
const random = require('../utils/randomUtil')
const originDocument = require('./data/newDocument.json')
const newAPI = require('./data/newAPI.json')
const generator = require('../controller/html_generator_controller.js')
const fileUtil = requeire('../utils/file_utils.js')

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

function testGenerateHtml() {
  let documentPath = apiController.getDocument(documentId)
  fs.readFile(documentPath, html, function (err) {
    if (err) {
      return console.error(err)
    }
    let $ = cheerio.load(html)
    console.log($('#description'))
  })
  generator.generate()
}

// console.log('create document')
// testCreateDocument()
//
// console.log('add api')
// testAddApi()

testGetDocument()
