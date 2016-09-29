'use strict'

const redis = require('redis')
const assert = require('assert')
const ChangeLog = require('../entity/update_log.js')
  // const Document = require('../entity/document.js')
const fs = require('fs')

const client = redis.createClient()

client.on('error', (err) => {
  console.log('Error ' + err)
})

/**
 *
 */
exports.createDocument = function (id, document) {
  if (Object.prototype.toString.call(document)
    .indexOf('String') !== 1) {
    document = JSON.stringify(document)
  }
  client.set(id, document, redis.print)
}

exports.updateDocument = function (documentId, name, description) {
  client.get(documentId, (err, document) => {
    if (document) {
      document.name = name
      document.description = description
      console.log(document)
      client.set(documentId, document)
    }
  })
}

/**
 *
 */
exports.addAPI = function (api, documentId) {
  client.get(documentId, (err, document) => {
    if (document) {
      document = JSON.parse(document)

      if (Object.prototype.toString.call(document.apis)
        .indexOf('Array') === -1) {
        document.apis = []
      }
      document.apis.push(api)

      let changeLog = generateChangeLog(api)
      console.log(changeLog)
      document.changeLogs.push(changeLog)
      console.log(document)
      client.set(documentId, JSON.stringify(document))
    }
  })
}

/**
 *
 */
exports.updateAPI = function (api, documentId) {
  client.get(documentId, (err, document) => {
    if (document) {
      console.log(document)
      let apiIndex = getAPIIndexByName(api.name)
      document.apis[apiIndex] = api
      document.changeLogs.push(generateChangeLog(api))
      client.set(documentId, document)
    }
  })
}

exports.deleteAPI = function (api, documentId, operator) {
  client.get(documentId, (err, document) => {
    console.log(document)
    let apiIndex = getAPIIndexByName(api.name)
    let deletedApi = document.apis.apiIndex
    document.apis.push(apiIndex, 1)
    let log = generateChangeLog(deletedApi)
    document.changeLogs.push(log)
    client.set(documentId, document)
  })
}

function getAPIIndexByName(apis, apiName) {
  for (let i = 0; i < apis.length; i++) {
    if (apiItem.name === apiName) {
      return i
    }
  }
}

exports.getDocument = function (documentId) {
  client.get(documentId, (err, document) => {
    if (document) {
      fs.writeFile('output/success-getDocument.json', document, function (err) {
        if (err) {
          return console.error(err)
        }
        console.log(document + "\n数据写入成功！")
      })
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
    .indexOf('Array') !== -1)
  let update = getLastUpdate(api)
  let log = new ChangeLog.ChangeLog(new Date(), update.operator, update.comment, api)
  return log
}

function getLastUpdate(api) {
  let updates = api.updates
  assert(Object.prototype.toString.call(api.updates)
    .indexOf('Array') !== -1)
  let lastUpdate = updates[0]
  for (let update in updates) {
    if (lastUpdate.updateTime < update.updateTime) {
      lastUpdate = update
    }
  }
  return lastUpdate
}
