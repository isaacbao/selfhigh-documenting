'use strict'
const assert = require('assert')


class ResponseData {
  /**
   * [一份API文档]
   * @param {[String]} code  [返回码]
   * @param {[message]} apis        [文档涉及到的api]
   * @param {[Array[UpdateLog]]} updateLogs  [文档的更新履历]
   * @param {[String]} description [文档描述]
   */
  constructor(code, message, info, data) {
    this.code = code
    this.message = message
    this.info = info
    this.data = data
  }
}

ResponseData.prototype.success = function (data) {
  let responseData = new ResponseData('00', 'success', '', data)
  return responseData
}

ResponseData.prototype.error = function (err) {
  assert(Object.prototype.toString.call(err)
    .indexOf('Error') != -1, '并没有异常信息')
  let responseData = new ResponseData('01', 'error', err.message)
  return responseData
}

ResponseData.prototype.notLogin = function () {
  let responseData = new ResponseData('02', '尚未登录', '')
  return responseData
}

ResponseData.prototype.noAuthorization = function () {
  let responseData = new ResponseData('03', '没有权限', '')
  return responseData
}

ResponseData.prototype.illegalArgument = function (err) {
  let responseData = new ResponseData('04', '参数不合法', err.message)
  return responseData
}

module.exports = ResponseData
