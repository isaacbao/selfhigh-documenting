const log4js = require('log4js')

log4js.configure({
  appenders: [{
    type: 'console'
  }, {
    type: 'dateFile',
    filename: 'G:/github_repository/selfhigh-documenting/logs/debug.log',
    pattern: '-yyyy-MM-dd.log',
    alwaysIncludePattern: true
  }, {
    type: 'logLevelFilter',
    level: 'ERROR',
    appender: {
      type: 'file',
      filename: 'G:/github_repository/selfhigh-documenting/logs/errors.log'
    }

  }]
});

module.exports = log4js
