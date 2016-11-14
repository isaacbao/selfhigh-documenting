'use strict'

const redis = require('redis')
const client = redis.createClient()
const assert = require('assert')
const ChangeLog = require('../entity/change_log.js')
  // const Document = require('../entity/document.js')
const Group = require('../entity/group.js')
const fs = require('fs')
const fileUtil = require('../utils/file_util.js')

const log4js = require('../utils/logger.js')
const logger = log4js.getLogger('api_controller')
const async = require('asyncawait/async')
const Await = require('asyncawait/await')

client.on('error', (err) => {
  logger.error(err)
})

/**
 *
 */
exports.createDocument = function (error, request, response, id, document) {
  if (Object.prototype.toString.call(document)
    .indexOf('String') !== 1) {
    document = JSON.stringify(document)
  }
  client.set(id, document, redis.print)
}

exports.updateDocument = function (error, request, response, documentId, name, description) {
  client.get(documentId, (err, document) => {
    if (document) {
      document.name = name
      document.description = description
      client.set(documentId, document)
    }
  })
}

/**
 *
 */
exports.addAPI = function (error, request, response, api, documentId) {
  client.get(documentId, (err, document) => {
    if (document) {
      document = JSON.parse(document)

      if (Object.prototype.toString.call(document.groups)
        .indexOf('Array') === -1) {
        document.groups = []
      }

      let tempGroup = document.groups
      let index = tempGroup.indexOf(api.group)
      if (index === -1) {
        tempGroup.push(new Group(api.group, [api]))
      } else {
        tempGroup[index].apis.push(api)
      }
      document.groups.push(api)

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
exports.updateAPI = function (error, request, response, api, documentId) {
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

exports.deleteAPI = function (error, request, response, api, documentId, operator) {
  client.get(documentId, (err, document) => {
    // console.log(document)
    let apiIndex = getAPIIndexByName(api.name)
    let deletedApi = document.apis.apiIndex
    document.apis.push(apiIndex, 1)
    let log = generateChangeLog(deletedApi)
    document.changeLogs.push(log)
    client.set(documentId, document)
  })
}

function getAPIIndexByName(error, request, response, apis, apiName) {
  for (let i = 0; i < apis.length; i++) {
    if (apiItem.name === apiName) {
      return i
    }
  }
}

function getDocument(documentId) {
  return new Promise((resolve, reject) => {
    redisClient.get(documentId, (err, document) => {
      if (err) reject(err)
      return resolve(document)
    })
  })
}

exports.getDocument = async(function (request, response, documentId) {
  let dirPath = fileUtil.root + '/test/output/success-getDocument.json';
  let document = getDocument(documentId)
  fs.writeFile(dirPath, document, function (err) {
    if (err) {
      return console.error(err)
    }
  })
  return document
})

exports.getChangeLogByDocument = function (request, response, documentId) {
  client.hgetall(documentId + 'changeLog', (err, reply) => {
    console.log(reply)
  })
}

function generateChangeLog(api) {
  if (Object.prototype.toString.call(api.updates)
    .indexOf('Array') === -1) {
    return new Error('接口更新记录异常')
  }
  let update = getLastUpdate(api)
  let log = new ChangeLog(new Date(), update.operator, update.comment, api.id)
  console.log('changelog' + JSON.stringify(log))
  return log
}

function getLastUpdate(api) {
  if (Object.prototype.toString.call(api.updates)
    .indexOf('Array') === -1) {
    return new Error('接口更新记录异常')
  }
  let updates = api.updates
  updates.sort(ChangeLog.sortByDate)
  let lastUpdate = updates[0]
    // for (let i = 0; i < updates.length; i++) {
    //   let update = updates[i]
    //   if (lastUpdate.updateTime < update.updateTime) {
    //     lastUpdate = update
    //   }
    // }
  return lastUpdate
}
