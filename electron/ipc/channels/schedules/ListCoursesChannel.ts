import { IpcMainEvent } from 'electron'
import { SchedulesController } from '../../../../app/infra/http/controllers/schedules-controller'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'
import electronLog from 'electron-log'
import { requiredReponseChannel } from '../factories/errors/responseChannel/requiredResponseChannel'
import { Course } from '../../../../app/entities/Course'

export class ListCoursesChannel implements IpcChannelInterface<Course> {
    getName(): string {
        return 'list-courses'
    }

    async handle(
        event: IpcMainEvent,
        request: IpcRequest<Course>
    ): Promise<void> {
        try {
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }

            const scheduleContrller = new SchedulesController()
            const { courses } = await scheduleContrller.listCourses()

            responseChannel(event, courses, request.responseChannel)
        } catch (error) {
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }
            emitErrorChannel(
                event,
                'Não foi possível retornar os dados.',
                request.responseChannel
            )
            electronLog.error(`IPC Channel "${this.getName()}" found an error.`)
        }
    }
}
