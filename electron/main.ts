import { app, BrowserWindow, Menu } from 'electron'
import { IPCChannels } from './ipc'
import electronLog from 'electron-log'
import path from 'path'
import fs from 'fs/promises'
import { getMiddleOfString } from '../helpers/get-middle-string'
// import { createTray } from './tray'

let updateApp
let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const logPath = path.join(__dirname, '..', '..', 'logs/main.log')

const assetsPath =
    process.env.NODE_ENV === 'production'
        ? process.resourcesPath
        : app.getAppPath()

electronLog.catchErrors({
    onError: error => {
        const errorName = getMiddleOfString(error.message, 'Error', '.')

        electronLog.error(
            'An error ocurred at main process. Error: ',
            errorName
        )
        if (mainWindow)
            mainWindow.webContents.send('error-channel', {
                error: errorName,
            })
    },
})

electronLog.transports.file.resolvePath = () => {
    return logPath
}

function setUpdates() {
    updateApp = require('update-electron-app')

    updateApp({
        updateInterval: '1 hour',
        notifyUser: true,
    })
}

function createWindow() {
    mainWindow = new BrowserWindow({
        icon: path.join(assetsPath, 'assets', 'icon.png'),
        width: 1100,
        height: 700,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            nativeWindowOpen: true,
        },
    })

    if (process.env.NODE_ENV === 'production') {
        Menu.setApplicationMenu(null)
    }

    electronLog.info('Window created.')

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

    electronLog.info('Window container is loaded.')

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    // createTray(mainWindow)
}

async function registerListeners() {
    const ipcChannels = new IPCChannels()
    ipcChannels.registerIpcChannels()

    electronLog.info('IPC channels registered.')
}

async function buildDependencies() {
    await registerListeners()
}

app.whenReady()
    .then(() => {
        setUpdates()
        createWindow()
    })
    .then(() => fs.unlink(logPath))
    .then(buildDependencies)
    .catch(e => console.error(e))

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electronLog.info('App was terminated.')

        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
