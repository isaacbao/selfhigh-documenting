require('coffee-react/register')
require('babel-register')(require('../babel.config'))
import path from 'path-extra'
import fs from 'fs-extra'
import { remote } from 'electron'
import lodash from 'lodash'        // TODO: Backward compatibility
import jQuery from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome  from 'react-fontawesome'
import * as ReactBootstrap from 'react-bootstrap'
const { Radio, Checkbox, FormControl } = ReactBootstrap

// Environments
window.remote = remote
window.ROOT = path.join(__dirname, '..')
window.EXROOT = remote.getGlobal('EXROOT')
window.APPDATA_PATH = remote.getGlobal('APPDATA_PATH')
window.PLUGIN_PATH = path.join(window.APPDATA_PATH, 'plugins')
window.POI_VERSION = remote.getGlobal('POI_VERSION')
window.SERVER_HOSTNAME = remote.getGlobal('SERVER_HOSTNAME')
window.MODULE_PATH = remote.getGlobal('MODULE_PATH')
window.appIcon = remote.getGlobal('appIcon')
fs.ensureDirSync(window.PLUGIN_PATH)
fs.ensureDirSync(path.join(window.PLUGIN_PATH, 'node_modules'))
window.isSafeMode = remote.getGlobal('isSafeMode')

// Add ROOT to `require` search path
require('module').globalPaths.push(window.ROOT)

// Shortcuts and Components
window.dbg = require(path.join(window.ROOT, 'lib', 'debug'))
window.dbg.init()
window._ = lodash           // TODO: Backward compatibility
window.$ = (param) => document.querySelector(param)
window.$$ = (param) => document.querySelectorAll(param)
window.jQuery = jQuery
window.React = React
window.ReactDOM = ReactDOM
window.FontAwesome = FontAwesome
window.ReactBootstrap = ReactBootstrap
// Workaround
window.ReactBootstrap.Input = class InputWorkAround extends React.Component {
  render() {
    switch (this.props.type) {
    case 'radio': {
      return (
        <Radio {...this.props}>{this.props.label}</Radio>
      )
    }
    case 'checkbox': {
      return (
        <Checkbox {...this.props}>{this.props.label}</Checkbox>
      )
    }
    case 'select': {
      return (
        <FormControl componentClass='select' {...this.props}>{this.props.children}</FormControl>
      )
    }
    default: {
      return (
        <FormControl {...this.props}>{this.props.children}</FormControl>
      )
    }
    }
  }
}

// Polyfills
Object.clone = (obj) =>
  JSON.parse(JSON.stringify(obj))
Object.remoteClone = (obj) =>
  JSON.parse(window.remote.require('./lib/utils').remoteStringify(obj))

// Utils
require('./env-parts/utils')

// Node modules
const originConfig = remote.require('./lib/config')
window.ipc = remote.require('./lib/ipc')
window.proxy = remote.require('./lib/proxy')
window.CONST = Object.remoteClone(remote.require('./lib/constant'))
window.config = {}
for (const key in originConfig) {
  window.config[key] = originConfig[key]
}

// i18n config
require('./env-parts/i18n-config')

// window.notify
// msg=null: Sound-only notification.
require('./env-parts/notif-center')
require('./env-parts/modal')
require('./env-parts/toast')

// Custom theme
// You should call window.applyTheme() to apply a theme properly.
require('./env-parts/theme')

// Global data resolver
require('./env-parts/data-resolver')

// Getter
require('./env-parts/getter')

// add devtool debug message print
require('./env-parts/devtool-message')
