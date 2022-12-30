import { IpcMainEvent } from 'electron'
import { SchedulesController } from '../../../../app/infra/http/controllers/schedules-controller'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'
import electronLog from 'electron-log'
import { requiredReponseChannel } from '../factories/errors/responseChannel/requiredResponseChannel'
import { Course } from '../../../../app/entities/Course'

export class DeleteCourseChannel implements IpcChannelInterface<Course> {
    getName(): string {
        return 'delete-course'
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
            await scheduleContrller.deleteCourse(request.params)

            responseChannel(event, 'Curso deletado', request.responseChannel)
        } catch (error) {
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }
            emitErrorChannel(
                event,
                'Não foi possível deletar o curso.',
                request.responseChannel
            )
            electronLog.error(`IPC Channel "${this.getName()}" found an error.`)
        }
    }
}
