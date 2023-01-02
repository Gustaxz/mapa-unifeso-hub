import { contextBridge, ipcRenderer } from 'electron'
import { Course } from '../src/domain/entities/course'
import { Period } from '../src/domain/entities/period'

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

    deleteCourse: (responseChannel: string, course: Course) => {
        ipcRenderer.send('delete-course', { responseChannel, params: course })
    },

    deleteSchedule: (responseChannel: string, data: any) => {
        ipcRenderer.send('delete-schedule', { responseChannel, params: data })
    },

    getSchedules: (
        responseChannel: string,
        course: Course,
        period: Period,
        day: string
    ) => {
        ipcRenderer.send('get-filterd-schedules', {
            responseChannel,
            params: { course, period, day },
        })
    },

    loginWithGoogle: (responseChannel: string) => {
        ipcRenderer.send('login-google', { responseChannel })
    },

    /**
     * Provide an easier way to listen to events
     */
    on: (channel: string, callback: Function) => {
        ipcRenderer.on(channel, (_, data) => callback(data))
    },
}

contextBridge.exposeInMainWorld('Main', api)
