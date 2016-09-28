'use strict'

const redis = require('redis')
const assert = require('assert')
const ChangeLog = require('./entity/update_log.js')
const Document = require('./entity/document.js')


client.on('error', (err) => {
  console.log('Error ' + err)
})

/**
 *
 */
exports.createDocument = function (document) {
  client.set(document.documentId, document, redis.print)
}

exports.updateDocument = function (name, description) {
  client.get(documentId, (err, reply) => {
    if (document) {
      console.log(document)
      document.apis.add(api)
      document.changeLogs.add(generateChangeLog(api))
      client.set(documentId, document)
    }
  })
}



/**
 *
 */
exports.addAPI = function (api, documentId) {
  client.get(documentId, (err, reply) => {
    if (document) {
      console.log(document)
      document.apis.add(api)
      document.changeLogs.add(generateChangeLog(api))
      client.set(documentId, document)
    }
  })
}

/**
 *
 */
exports.updateAPI = function (api, documentId) {
  client.get(documentId, (err, reply) => {
    if (document) {
      console.log(document)
      let apiIndex = getAPIIndexByName(api.name)
      document.apis[apiIndex] = api
      document.changeLogs.add(generateChangeLog(api))
      client.set(documentId, document)
    }
  })
}

exports.deleteAPI = function (api, documentId, operator) {
  client.get(documentId, (err, reply) => {
    console.log(document)
    let apiIndex = getAPIIndexByName(api.name)
    let deletedApi = document.apis.apiIndex
    document.apis.splice(apiIndex, 1);
    document.changeLogs.add(generateChangeLog(deletedApi))
    client.set(documentId, document)
  })
}

function getAPIIndexByName(apis, apiName) {
  apis.forEach(apiItem, index) {
    if (apiItem.name == apiName) {
      return index
    }
  }
}

exports.getDocument = function (documentId) {
  client.get(documentId, (err, document) => {
    if (document) {
      console.log(document)
    }
  })
}

exports.getChangeLogByDocument = function (documentId) {
  client.hgetall(documentId + 'changeLog', (err, reply) => {
    console.log(reply)
  })
}

function generateChangeLog(api) {
  assert(Object.prototype.toString.call(api.updates)
    .contain('Array'))
  let update = getLastComment(api)
  let log = ChangeLog.ChangeLog(new Date(), update.operator, update.comment, api)
}

function getLastUpdate(api) {
  let updates = api.updates
  assert(Object.prototype.toString.call(api.updates)
    .contain('Array'))
  let lastUpdate = updates[0]
  for (update: updates) {
    if (lastUpdate.updateTime < update.updateTime) {
      lastUpdate = update
    }
  }
  return lastUpdate
}
