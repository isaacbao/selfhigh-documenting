const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const xmlparser = require('express-xml-bodyparser')
const app = express()
const RedisStore = require('connect-redis')(session)
const redis = require('redis')

const log4js = require('./utils/logger')
const logger = log4js.getLogger('app')
const selfhighDocument = require('./selfhigh_document')

app.locals.redisClient = redis.createClient()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(xmlparser())
app.use(cookieParser())
const SEVEN_DAY = 7 * 24 * 60 * 60 * 1000
app.use(session({
    secret: 'selfhigh-document',
    name: 'JS_SESSIONID',
    cookie: {
      path: '/selfhighDocument/V0',
      maxAge: SEVEN_DAY,
      httpOnly: true
    },
    resave: true,
    store: new RedisStore({
      host: "127.0.0.1",
      port: "6379"
    }),
    saveUninitialized: true
  }))
  // app.use(express.Router())
app.use('/selfhighDocument/V0', log4js.connectLogger(logger, {
  level: 'auto',
  format: ':method :url :status'
}))
app.use('/selfhighDocument/V0', selfhighDocument)

app.listen(3000, function () {
  console.log('Talent-Collection started on port 3000!')
})
