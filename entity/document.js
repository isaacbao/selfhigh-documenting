/**
 * [一份API文档]
 * @param {[String]} documentId  [文档ID]
 * @param {[Array[API]]} apis        [文档涉及到的api]
 * @param {[Array[UpdateLog]]} updateLogs  [文档的更新履历]
 * @param {[String]} description [文档描述]
 */
exports.Document = function (documentId, apis, updateLogs, description) {
  this.documentId = documentId
  this.apis = apis
  this.updateLogs = updateLogs
  this.description = description
}
