/**
 * 将文档实体转换为html接口文档
 */
'use strict'
const cheerio = require('cheerio')

exports.generate(document) {

}

function getDefaultHead() {
  let $ = cheerio.load('<head></head>')
  console.log($(head))
  $(head).append('<title id="apiDocTitle">后端接口</title>')
}

getDefaultHead()
