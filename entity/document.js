'use strict'

const random = require('../utils/randomUtil.js')

class Document {
  /**
   * [一份API文档]
   * @param {[String]} documentId  [文档ID]
   * @param {[Array[API]]} apis        [文档涉及到的api]
   * @param {[Array[UpdateLog]]} updateLogs  [文档的更新履历]
   * @param {[String]} description [文档描述]
   */
  constructor(apis, changeLogs, description, name) {

    this.apis = apis
    this.changeLogs = changeLogs
    this.description = description
    this.name = name
  }
}
module.exports = Document
