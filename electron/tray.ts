import { app, BrowserWindow, Menu, Tray } from 'electron'
import { MenuItemConstructorOptions } from 'electron/main'
import path from 'path'
import electronLog from 'electron-log'

const assetsPath =
    process.env.NODE_ENV === 'production'
        ? process.resourcesPath
        : app.getAppPath()

let tray: Tray | null

export function createTray(mainWindow: BrowserWindow | null) {
    const icon = path.join(assetsPath, 'assets', 'icon.png')
    console.log(icon)
    tray = new Tray(icon)
    tray.setToolTip('UI Mapa Unifeso Tray')

    const template: MenuItemConstructorOptions[] = [
        {
            label: 'Cursos',
            click: () => {
                mainWindow?.webContents.send('open-courses-tray')
            },
        },
    ]
    const ctxMenu = Menu.buildFromTemplate(template)

    tray.setContextMenu(ctxMenu)

    // tray.on('click', () => {
    //     if (mainWindow) {
    //         if (mainWindow.isVisible()) {
    //             mainWindow.show()
    //         } else {
    //             mainWindow.hide()
    //         }
    //     }
    // })

    electronLog.info('Tray created.')
}
