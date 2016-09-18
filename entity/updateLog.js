/**
 * [更新履历]
 * @param {[Date]} date         [更新时间]
 * @param {[String]} operator       [进行更新的人]
 * @param {[String]} commments [更新的详细信息]
 * @param {[Array]} relatedAPIS   [这次更新涉及到的接口]
 */
function API(date, operator, commments, relatedAPIS) {
  this.date = date
  this.operator = operator
  this.commments = commments
  this.relatedAPIS = relatedAPIS
}
