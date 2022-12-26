import { IpcMainEvent } from 'electron'
import { Course } from '../../../../app/entities/Course'
import { SchedulesController } from '../../../../app/infra/http/controllers/schedules-controller'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'
import electronLog from 'electron-log'
import { requiredReponseChannel } from '../factories/errors/responseChannel/requiredResponseChannel'

export class CreateCourseChannel implements IpcChannelInterface<Course> {
    getName(): string {
        return 'create-course'
    }

    async handle(
        event: IpcMainEvent,
        request: IpcRequest<Course>
    ): Promise<void> {
        try {
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }
            if (!request.params) {
                return emitErrorChannel(
                    event,
                    'Parâmetros faltando',
                    request.responseChannel
                )
            }

            const scheduleContrller = new SchedulesController()
            await scheduleContrller.createCourse(request.params)

            responseChannel(event, 'Curso criado', request.responseChannel)
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
