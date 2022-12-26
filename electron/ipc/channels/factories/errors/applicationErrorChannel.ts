import { IpcMainEvent } from 'electron/main'

export function applicationErrorChannel(
    event: IpcMainEvent,
    errorMessage: any
) {
    event.sender.send('error-channel', {
        error: errorMessage,
    })
}
