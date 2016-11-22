const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const log4js = require('./utils/logger')
const logger = log4js.getLogger('talent_collection')
const apiController = require('./controllers/api_controller')
const htmlGenerator = require('./controllers/html_generator_controller')
const auth = require('./middlewares/auth')
const router = express.Router()

router.get('/getDocument', auth, apiController.getDocument)

module.exports = router
