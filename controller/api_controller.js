'use strict'

const redis = require('redis')
const assert = require('assert')
const updateLog = require('update_log')

client.on('error', (err) => {
  console.log('Error ' + err)
})

/**
 *
 */
exports.addAPI = function (api, documentId) {
  client.get(documentId, (err, reply) => {
    if (document) {
      console.log(document)
      document.apis.add(api)
      document.updateLogs.add(generateUpdateLog(api))
      client.set(documentId, document)
    }
  })
}

exports.getDocument = function (documentId) {
  client.get(documentId, (err, document) => {
    if (document) {
      console.log(document)
    }
  })
}

exports.getUpdateLogByDocument = function (documentId) {
  client.hgetall(documentId + 'updateLog', (err, reply) => {
    console.log(reply)
  })
}

function generateUpdateLog(api) {
  assert(Object.prototype.toString.call(api.updates).contain('Array'))
  let updateComment = getLastComment(api)
  let log = updateLog.UpdateLog(new Date(), api.operator, updateComment, api)
}

function getLastComment(api) {
  let updates = api.updates
  assert(Object.prototype.toString.call(api.updates).contain('Array'))
  let lastUpdate = updates[0]
  for (update: updates) {
    if (lastUpdate.updateTime < update.updateTime) {
      lastUpdate = update
    }
  }
  return lastUpdate.commment
}
