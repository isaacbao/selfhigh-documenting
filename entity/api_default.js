/**
 * [默认的接口文档格式]
 * @param {[String]} name         [接口名称，必填，非空]
 * @param {[Array]} params       [接口的参数描述]
 * @param {[String]} paramsSample [参数示例]
 * @param {[String]} returnData   [返回的数据]
 * @param {[String]} returnSample [返回示例]
 * @param {[String]} comment      [备注]
 */
exports.API = function (name, params, paramsSample, returnData, returnSample, comment, addDate, updates) {
  this.name = name
  this.params = params
  this.returnData = returnData
  this.returnSample = returnSample
  this.comment = comment
  this.addDate = addDate
  this.updates = updates
}

/**
 * [默认的参数格式]
 * @param  {[String]} name        [参数名称]
 * @param  {[String]} valueType   [参数值的类型]
 * @param  {[String]} valueSample [参数示例]
 * @param  {[String]} valueScope  [参数值取值范围]
 * @return {[type]}             [description]
 */
exports.Param = function (name, valueType, valueSample, valueScope) {
  this.name = name
  this.valueType = valueType
  this.valueSample = valueSample
  this.valueScope = valueScope
}
