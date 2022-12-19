import { app, BrowserWindow, ipcMain } from 'electron'
import { AppModule } from '../app/app.module'
import { Period } from '../app/entities/Period'
import { CreateSchedule } from '../app/services/create-schedule'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow() {
    mainWindow = new BrowserWindow({
        // icon: path.join(assetsPath, 'assets', 'icon.png'),
        width: 1100,
        height: 700,
        backgroundColor: '#191622',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    })

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

async function registerListeners() {
    /**
     * This comes from bridge integration, check bridge.ts
     */
    ipcMain.on('message', async (_, message) => {
        const appModule = new AppModule()
        const createSchedule = new CreateSchedule(
            appModule.scheduleDatabaseProvider
        )
        const { schedule } = await createSchedule.execute({
            course: 'Teste 9',
            day: 'Quarta',
            hour: '20:00',
            period: new Period(2),
        })

        console.log(schedule)
    })
}

app.on('ready', createWindow)
    .whenReady()
    .then(registerListeners)
    .catch(e => console.error(e))

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
