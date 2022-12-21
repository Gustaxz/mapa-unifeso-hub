import { IpcMainEvent } from 'electron/main'

export function emitErrorChannel(event: IpcMainEvent, errorMessage: any) {
    event.sender.send('error-channel', {
        error: errorMessage,
    })
}
