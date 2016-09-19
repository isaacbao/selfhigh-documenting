var redis = require('redis')

client.on('error', function (err) {
  console.log('Error ' + err)
})

/**
 *
 */
exports.addAPI(api, documentId) {
  client.hset(documentId, api.name, api, redis.print)
}
