/**
 * [更新履历]
 * @param {[Date]} date         [更新时间]
 * @param {[String]} operator       [进行更新的人]
 * @param {[String]} commments [更新的详细信息]
 * @param {[Array]} relatedAPIS   [这次更新涉及到的接口]
 * @param {[Array]} documentId   [该履历所属的文档]
 */
exports.UpdateLog = function (date, operator, commments, relatedAPIS, documentId) {
  this.date = date
  this.operator = operator
  this.commments = commments
  this.relatedAPIS = relatedAPIS
  this.documentId = documentId
}
