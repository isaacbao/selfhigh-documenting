'use strict'
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
