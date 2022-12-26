import { IpcMainEvent } from 'electron/main'
import { applicationErrorChannel } from '../applicationErrorChannel'

export function requiredReponseChannel(event: IpcMainEvent) {
    applicationErrorChannel(event, 'É necessário um canal de resposta')
}
