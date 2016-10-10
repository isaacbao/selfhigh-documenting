/**
 * 将文档实体转换为html接口文档
 */
'use strict'
const cheerio = require('cheerio')
const fs = require('fs')
const fileUtil = require('../utils/file_util.js')

const DOCUMENT_DIR = fileUtil.root + '/test/output/'

exports.generate = function (document, theme) {
  getDefaultFile(document.name, theme)
  fs.readFile(DOCUMENT_DIR + fileName, html, function (err) {
    if (err) {
      return console.error(err)
    }
    let $ = cheerio.load(html)
    console.log($('#description'))
  })
}

/**
 * [套用基本模板]
 * @param  {[String]} documentName [文档的名称]
 * @param  {[String]} theme        [用到的主题]
 * @return {[type]}              [description]
 */
function getDefaultFile(documentName, theme) {
  fs.readFile('../repository/template.html', head, function (err) {
    if (err) {
      return console.error(err)
    }
    fs.writeFile(DOCUMENT_DIR + documentName, head, function (err) {
      if (err) {
        return console.error(err)
      }
      console.log("document is generated")
    })
  })
}
