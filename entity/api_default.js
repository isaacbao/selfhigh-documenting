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
  constructor(name, params, paramsSample, returnData, returnSample, comment, addDate, updates, group, url) {
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

class Parameter {
  /**
   * [默认的参数格式]
   * @param  {[String]} name        [参数名称]
   * @param  {[String]} valueType   [参数值的类型]
   * @param  {[String]} valueSample [参数示例]
   * @param  {[String]} valueScope  [参数值取值范围]
   * @param  {[String]} description [参数的说明]
   */
  constructor(name, valueType, valueSample, valueScope, description) {
    this.name = name
    this.valueType = valueType
    this.valueSample = valueSample
    this.valueScope = valueScope
    this.description = description
  }
}

class Update {
  /**
   * 接口的更新履历
   * @param {[Date]} updateTime    [更新时间]
   * @param {[String]} updateComment [更新内容]
   * @param {[String]} apiName [接口名称]
   */
  constructor(updateTime, updateComment, apiName, operator) {
    this.updateTime = updateTime
    this.updateComment = updateComment
    this.apiName = apiName
    this.operator = operator
  }
}

exports.API = API
exports.Parameter = Parameter
exports.Update = Update
