import { IpcMainEvent } from 'electron/main'

export function emitErrorChannel(
    event: IpcMainEvent,
    errorMessage: any,
    errorChannel: string
) {
    event.sender.send(errorChannel, {
        data: errorMessage,
    })
}
