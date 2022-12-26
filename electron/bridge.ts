import { contextBridge, ipcRenderer } from 'electron'

export const api = {
    /**
     * Here you can expose functions to the renderer process
     * so they can interact with the main (electron) side
     * without security problems.
     *
     * The function below can accessed using `window.Main.sendMessage`
     */

    listSchedules: (responseChannel: string) => {
        ipcRenderer.send('list-schedules', { responseChannel })
    },

    createSchedule: (responseChannel: string, data: any) => {
        ipcRenderer.send('create-schedule', { responseChannel, params: data })
    },

    createCourse: (responseChannel: string, data: any) => {
        ipcRenderer.send('create-course', { responseChannel, params: data })
    },

    listCourses: (responseChannel: string) => {
        ipcRenderer.send('list-courses', { responseChannel })
    },

    deleteSchedule: (responseChannel: string, data: any) => {
        ipcRenderer.send('delete-schedule', { responseChannel, params: data })
    },

    /**
     * Provide an easier way to listen to events
     */
    on: (channel: string, callback: Function) => {
        ipcRenderer.on(channel, (_, data) => callback(data))
    },
}

contextBridge.exposeInMainWorld('Main', api)
