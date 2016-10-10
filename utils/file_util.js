'use strict'
const path = require('path')
const findRoot = require('find-root')
exports.root = path.join(findRoot(''))
