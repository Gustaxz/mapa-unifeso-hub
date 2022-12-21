import { IpcMainEvent } from 'electron/main'

export function responseChannel(
    event: IpcMainEvent,
    data: any,
    channel: string
) {
    event.sender.send(channel, {
        data,
    })
}
