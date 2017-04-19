/**
 * 将文档实体转换为html接口文档
 */
'use strict'
const cheerio = require('cheerio')
const fs = require('fs')
const fileUtil = require('../utils/file_util.js')

const DOCUMENT_DIR = fileUtil.root + '/test/output/'

exports.generate = function (error, request, response, document, theme) {

}

/**
 * [套用基本模板]
 * @param  {[String]} documentName [文档的名称]
 * @param  {[String]} theme        [用到的主题]
 * @return {[type]}              [description]
 */
function getTemplate(theme) {
  return fs.readFileSync('../views/template.html', 'utf-8')
}
