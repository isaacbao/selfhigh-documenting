'use strict'
var apiController = require('../controller/api_controller.js')
var fs = require('fs')
const random = require('../utils/randomUtil')

let documentId = 'DJWYrja5'

function testCreateDocument() {
  fs.readFile('data/newDocument.json', function (err, data) {
    // console.log("read file")
    if (err) {
      console.error(err)
    }
    // console.log("异步读取: " + data.toString());
    apiController.createDocument(documentId, data)
  });
}

function testGetDocument() {
  apiController.getDocument(documentId)
}

console.log("write")
testCreateDocument()
console.log("read")
testGetDocument()
