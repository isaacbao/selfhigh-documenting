'use strict'
class group {
  /**
   * [接口组别]
   * @param {[String]} name         [组别名称，必填，非空，同一个文档中不允许存在同名接口]
   * @param {[Array]} apis       [组内的api]
   */
  constructor(name, apis) {
    this.name = name
    this.apis = apis
  }
}
