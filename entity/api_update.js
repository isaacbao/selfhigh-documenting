'use strict'
class Update {
  /**
   * 接口的更新履历
   * @param {[Date]} updateTime    [更新时间]
   * @param {[String]} updateComment [更新内容]
   * @param {[String]} operator [变更提交人]
   */
  constructor(updateTime, updateComment, operator) {
    this.updateTime = updateTime
    this.updateComment = updateComment
    this.operator = operator
  }
}

module.exports = Update
