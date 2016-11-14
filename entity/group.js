'use strict'
class Group {
  /**
   * [接口组别]
   * @param {[String]} name         [组别名称，必填，非空，同一个文档中不允许存在同名接口]
   * @param {[Array]} apis       [组内的api]
   */
  constructor(name, id, apis) {
    this.name = name
    this.id = id
    this.apis = apis
  }
}

module.exports = Group
