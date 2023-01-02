import { ipcMain } from 'electron'
import { IpcChannelInterface } from './interfaces'
import { CreateScheduleChannel } from './channels/schedules/CreateScheduleChannnel'
import { ListSchedulesChannel } from './channels/schedules/ListSchedulesChannel'
import { CreateCourseChannel } from './channels/schedules/CreateCourseChannel'
import { DeleteScheduleChannel } from './channels/schedules/DeleteScheduleChannel'
import { ListCoursesChannel } from './channels/schedules/ListCoursesChannel'
import { GetSchedulesChannel } from './channels/schedules/GetSchedulesChannel'
import { DeleteCourseChannel } from './channels/schedules/DeleteCourseChannel'
import { GoogleProviderChannel } from './channels/login/GoogleProviderChannel'

export class IPCChannels {
    private channels: IpcChannelInterface<any>[] = [
        new CreateScheduleChannel(),
        new ListSchedulesChannel(),
        new CreateCourseChannel(),
        new DeleteScheduleChannel(),
        new ListCoursesChannel(),
        new GetSchedulesChannel(),
        new DeleteCourseChannel(),
        new GoogleProviderChannel(),
    ]

    public registerIpcChannels() {
        this.channels.forEach(channel =>
            ipcMain.on(channel.getName(), (event, request) =>
                channel.handle(event, request)
            )
        )
    }
}
