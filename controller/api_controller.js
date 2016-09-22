var redis = require('redis')
var assert = require('assert')
var updateLog = require('update_log')

client.on('error', function (err) {
  console.log('Error ' + err)
})

/**
 *
 */
exports.addAPI = function (api, documentId) {
  client.get(documentId, function (err, reply) {
    if (document) {
      console.log(document)
      document.apis.add(api)
    }
  })
}

exports.getAPIByDocument = function (documentId) {
  client.hgetall(documentId + 'API', function (err, document) {
    if (document) {
      console.log(document)
    }
  })
}

exports.getUpdateLogByDocument = function (documentId) {
  client.hgetall(documentId + 'updateLog', function (err, reply) {
    console.log(reply)
  })
}

function generateUpdateLog(api) {
  assert(Object.prototype.toString.call(api.updates).contain('Array'))
  var updateComment = getLastComment(api)
  var log = updateLog.UpdateLog(new Date(), api.operator, api.updates, api, api.documentId)
}

function getLastComment(api) {
  var updates = api.updates
  assert(Object.prototype.toString.call(api.updates).contain('Array'))
  var lastUpdate = updates[0]
  for (update: updates) {
    if (lastUpdate.updateTime < update.updateTime) {
      lastUpdate = update
    }
  }
}
