'use strict'
const ResponseData = require('../utils/response_data')
const log4js = require('../utils/logger')
const logger = log4js.getLogger('auth')
  // const user = require('../controllers/user')

module.exports = function (req, res, next) {
  logger.error(req.session)
    // if (!req.session.user && !req.session.userid) res.json(ResponseData.prototype.notLogin())
    // if (!req.session.user) {
    //   req.session.user = user.findUserById(req.session.userid)
    // }
  next()
}
