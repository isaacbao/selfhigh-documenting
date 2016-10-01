'use strict'

class ChangeLog {
  /**
   * [更新履历]
   * @param {[Date]} date         [更新时间]
   * @param {[String]} operator       [进行更新的人]
   * @param {[String]} commment [更新的详细信息]
   * @param {[Array]} relatedAPIS   [这次更新涉及到的接口]
   * @param {[Array]} documentId   [该履历所属的文档]
   */
  constructor(date, operator, commment, relatedAPI) {
    this.date = date
    this.operator = operator
    this.commment = commment
    this.relatedAPI = relatedAPI
      // this.documentId = documentId
  }
}
exports.ChangeLog = ChangeLog
