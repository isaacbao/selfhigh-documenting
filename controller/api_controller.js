var redis = require('redis')
var assert = require('assert')

client.on('error', function (err) {
  console.log('Error ' + err)
})

/**
 *
 */
exports.addAPI = function (api, documentId) {
  client.hset(documentId + 'API', api.name, api, redis.print)
  client.set(documentId + 'updateLog', updateLogs)
}

exports.getAPIByDocument = function (documentId) {
  client.hgetall(documentId + 'API', function (err, reply) {
    console.log(reply)
  })
}

exports.getUpdateLogByDocument = function (documentId) {
  client.hgetall(documentId + 'updateLog', function (err, reply) {
    console.log(reply)
  })
}

function updateUpdateLog(err, updateLogFromRedis, api) {
  assert(Object.prototype.toString.call(api.updates).contain('Array'))
}
