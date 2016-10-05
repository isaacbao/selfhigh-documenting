/**
 * 将文档实体转换为html接口文档
 */
'use strict'
const cheerio = require('cheerio')
const fs = require('fs')

const DOCUMENT_DIR = '../test/output/'

exports.generate(document, documentName, theme) {
  getDefaultHead(documentName, theme)
}

/**
 * [套用基本模板]
 * @param  {[String]} documentName [文档的名称]
 * @param  {[String]} theme        [用到的主题]
 * @return {[type]}              [description]
 */
function getDefaultFile(documentName, theme) {
  fs.readFile('../repository/head.html', head, function (err) {
    if (err) {
      return console.error(err)
    }
    fs.writeFile(DOCUMENT_DIR + fileName, head, function (err) {
      if (err) {
        return console.error(err)
      }
      console.log("document is generated")
    })
  })
}

getDefaultHead()
