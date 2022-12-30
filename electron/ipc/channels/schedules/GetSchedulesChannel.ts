import { IpcMainEvent } from 'electron'
import { SchedulesController } from '../../../../app/infra/http/controllers/schedules-controller'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'
import electronLog from 'electron-log'
import { requiredReponseChannel } from '../factories/errors/responseChannel/requiredResponseChannel'
import { Course } from '../../../../app/entities/Course'
import { Period } from '../../../../app/entities/Period'

interface IFilterSchedules {
    course: Course
    period: Period
    day: string
}

export class GetSchedulesChannel
    implements IpcChannelInterface<IFilterSchedules>
{
    getName(): string {
        return 'get-filterd-schedules'
    }

    async handle(
        event: IpcMainEvent,
        request: IpcRequest<IFilterSchedules>
    ): Promise<void> {
        try {
            console.log('request')
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }

            if (!request.params) {
                return emitErrorChannel(
                    event,
                    'São necessários os parâmetros',
                    request.responseChannel
                )
            }

            const { course, day, period } = request.params

            const scheduleContrller = new SchedulesController()
            const { schedules } = await scheduleContrller.getSchedules(
                course,
                period,
                day
            )

            responseChannel(event, schedules, request.responseChannel)
        } catch (error) {
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }
            emitErrorChannel(
                event,
                'Não foi possível listar os horários.',
                request.responseChannel
            )
            electronLog.error(`IPC Channel "${this.getName()}" found an error.`)
        }
    }
}
