var redis = require('redis')

client.on('error', function (err) {
  console.log('Error ' + err)
})

/**
 *
 */
exports.addAPI = function (api, documentId) {
  client.hset(documentId, api.name, api, redis.print)
}

exports.getAPIByDocument = function (documentId) {
  client.hgetall(documentId, function (err, reply) {
    console.log(reply)
  })
}
