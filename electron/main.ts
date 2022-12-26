import { app, BrowserWindow } from 'electron'
import { IPCChannels } from './ipc'
import electronLog from 'electron-log'
import path from 'path'
import fs from 'fs/promises'
import { getMiddleOfString } from '../helpers/get-middle-string'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const logPath = path.join(__dirname, '..', '..', 'logs/main.log')

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

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

// require('electron-reload')(__dirname, {
//     electron: path.join(
//         __dirname,
//         '..',
//         '..',
//         'node_modules',
//         '.bin',
//         'electron'
//     ),
// })

function createWindow() {
    fs.unlink(logPath)

    mainWindow = new BrowserWindow({
        // icon: path.join(assetsPath, 'assets', 'icon.png'),
        width: 1100,
        height: 700,
        backgroundColor: '#191622',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            devTools: true,
        },
    })

    console.log(MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY, MAIN_WINDOW_WEBPACK_ENTRY)

    electronLog.info('Window created.')

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

    electronLog.info('Window container is loaded.')

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

async function registerListeners() {
    /**
     * This comes from bridge integration, check bridge.ts
     */
    // ipcMain.on('message', async (_, message) => {
    //     const appModule = new AppModule()

    //     const retrieveSchedule = new RetrieveSchedules(
    //         appModule.scheduleDatabaseProvider
    //     )

    //     const allData = await retrieveSchedule.execute()

    //     console.log(JSON.stringify(allData))
    // })

    const ipcChannels = new IPCChannels()
    ipcChannels.registerIpcChannels()

    electronLog.info('IPC channels registered.')
}

app.on('ready', createWindow)
    .whenReady()
    .then(registerListeners)
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
