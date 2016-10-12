'use strict'
const apiController = require('../controller/api_controller.js')
const fs = require('fs')
const random = require('../utils/randomUtil')
const originDocument = require('./data/newDocument.json')
const newAPI = require('./data/newAPI.json')
const generator = require('../controller/html_generator_controller.js')
const fileUtil = require('../utils/file_util.js')
const cheerio = require('cheerio')

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
  console.log('get document from redis')
  let documentPath = apiController.getDocument(documentId)

  console.log('try read template')
  let html = fs.readFileSync(documentPath, 'utf-8')
  console.log(html)

  let $ = cheerio.load(html)
  console.log('description:\n' + $('#description')
    .html())
  console.log('try generate')
  generator.generate()
}

// console.log('create document')
// testCreateDocument()
// console.log('add api')
// testAddApi()

testGenerateHtml()
