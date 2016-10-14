/**
 * 将文档实体转换为html接口文档
 */
'use strict'
const cheerio = require('cheerio')
const fs = require('fs')
const fileUtil = require('../utils/file_util.js')

const DOCUMENT_DIR = fileUtil.root + '/test/output/'

exports.generate = function (document, theme) {

  let html = getTemplate(theme)
  console.log('html:\n' + html)
  let $ = cheerio.load(html)
  let documentJson = JSON.parse(document)
  console.log('document:\n' + documentJson)
  let descriptionElement = $('#description')
  console.log('description:\n' + documentJson.description)
  descriptionElement.append('<p>' + documentJson.description + '</p>')
  console.log('description:\n' + descriptionElement.html())
}

/**
 * [套用基本模板]
 * @param  {[String]} documentName [文档的名称]
 * @param  {[String]} theme        [用到的主题]
 * @return {[type]}              [description]
 */
function getTemplate(theme) {
  return fs.readFileSync('../repository/template.html', 'utf-8')
}
