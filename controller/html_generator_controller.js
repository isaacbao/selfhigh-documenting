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
  let $ = cheerio.load(html, {
    decodeEntities: false
  })


  let updateRecordElement = $('#updateRecord')
  let updateRecordTable = updateRecordElement.find('table')
  for (let index = 0; index < document.changeLogs.length; index++) {
    let changeLog = document.changeLogs[index]
    updateRecordTable.append('<tr><td><p class="blog-post-meta">' + changeLog.date + '</p></td><td>' + changeLog.operator + '</td><td colspan=2><a href="#' + changeLog.relatedAPI + '"><p>' + changeLog.comment + '</p></a></td>')
  }


  let descriptionElement = $('#description')
  descriptionElement.append('<p>' + document.description + '</p>')

  let mainElement = $('#main')
  for (let index = 0; index < document.apis.length; index++) {
    let api = document.apis[index]
  }

  return $.html()
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
