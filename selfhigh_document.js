const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const log4js = require('./utils/logger')
const logger = log4js.getLogger('talent_collection')
const resume = require('./controllers/resume')
const user = require('./controllers/user')
const accessToken = require('./controllers/access_token')
const htmlGenerator = require('./controllers/html_generator_controller')
const auth = require('./middlewares/auth')
const router = express.Router()

router.post('/getDocument', auth, extendAccount.bindAccount)

module.exports = router
