'use strict'
var apiController = require('controller/api_controller.js')
var fs = require('fs')

function testCreateDocument() {
  fs.readFile('data/newDocument.json', function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("异步读取: " + data.toString());
    apiController.createDocument(data)
  });
}
