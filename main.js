//native客户端的入口
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')

// Environment
global.ROOT = __dirname
global.EXECROOT = path.join(process.execPath, '..')
global.MODULE_PATH = path.join(global.ROOT, "node_modules")

let mainWindow

const menuTemplate = [];

function createWindow() {
    const {screen} = require('electron')
    const {workArea} = screen.getPrimaryDisplay()
    // let {x, y, width, height} = config.get('poi.window', workArea)
    // const validate = (n, min, range) => (n != null && n >= min && n < min + range)
    // const withinDisplay = (d) => {
    //     const wa = d.workArea
    //     return validate(x, wa.x, wa.width) && validate(y, wa.y, wa.height)
    // }
    // if (!screen.getAllDisplays().some(withinDisplay)) {
    x = workArea.x
    y = workArea.y
    // }
    // if (width == null) {
    width = workArea.width
    // }
    // if (height == null) {
    height = workArea.height
    // }

    mainWindow = new BrowserWindow({
        x: x,
        y: y,
        width: width,
        height: height,
        title: 'selfhigh',
        // icon: poiIconPath,
        // resizable: config.get('poi.content.resizeable', true),
        // alwaysOnTop: config.get('poi.content.alwaysOnTop', false),
        titleBarStyle: 'hidden',
        enableLargerThanScreen: true,
        webPreferences: {
            plugins: true,
        },
        type: "textured",
        backgroundColor :"#FFF",
        // transparent:true,
        darkTheme: true
    })
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
    mainWindow.loadURL(url.format({
        pathname: path.join(global.ROOT + '/public', 'index.html'),
        protocol: 'file:',
        slashes: true
    }))


    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})
