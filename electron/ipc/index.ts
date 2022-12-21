import { ipcMain } from 'electron'
import { IpcChannelInterface } from './interfaces'
import { CreateScheduleChannel } from './channels/schedules/CreateScheduleChannnel'
import { ListSchedulesChannel } from './channels/schedules/ListSchedulesChannel'

export class IPCChannels {
    private channels: IpcChannelInterface<any>[] = [
        new CreateScheduleChannel(),
        new ListSchedulesChannel(),
    ]

    public registerIpcChannels() {
        this.channels.forEach(channel =>
            ipcMain.on(channel.getName(), (event, request) =>
                channel.handle(event, request)
            )
        )
    }
}
