'use strict'

class API {
  /**
   * [默认的接口文档格式]
   * @param {[String]} name         [接口名称，必填，非空，同一个文档中不允许存在同名接口]
   * @param {[Array]} params       [接口的参数描述]
   * @param {[String]} paramsSample [参数示例]
   * @param {[String]} returnData   [返回的数据]
   * @param {[String]} returnSample [返回示例]
   * @param {[String]} comment      [备注]
   * @param {[String]} group      [api所属的组]
   * @param {[String]} url      [api地址]
   */
  constructor(id, name, params, paramsSample, returnData, returnSample, comment, addDate, updates, group, url) {
    this.id = id
    this.name = name
    this.params = params
    this.returnData = returnData
    this.returnSample = returnSample
    this.comment = comment
    this.addDate = addDate
    this.updates = updates
    this.group = group
    this.url = url
  }
}

module.exports = API
