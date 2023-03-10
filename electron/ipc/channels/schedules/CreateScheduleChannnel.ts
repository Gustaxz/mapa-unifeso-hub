import { IpcMainEvent } from 'electron'
import { Schedule } from '../../../../app/entities/Schedule'
import { SchedulesController } from '../../../../app/infra/http/controllers/schedules-controller'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'
import electronLog from 'electron-log'
import { applicationErrorChannel } from '../factories/errors/applicationErrorChannel'
import { requiredReponseChannel } from '../factories/errors/responseChannel/requiredResponseChannel'

export class CreateScheduleChannel implements IpcChannelInterface<Schedule> {
    getName(): string {
        return 'create-schedule'
    }

    async handle(
        event: IpcMainEvent,
        request: IpcRequest<Schedule>
    ): Promise<void> {
        try {
            if (!request.params) {
                return applicationErrorChannel(
                    event,
                    'É necessário um canal de resposta'
                )
            }

            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }

            const scheduleContrller = new SchedulesController()
            await scheduleContrller.createSchedule(request.params)

            responseChannel(event, 'Horário criado', request.responseChannel)
        } catch (error) {
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }
            emitErrorChannel(
                event,
                'Não foi possível criar os horários',
                request.responseChannel
            )
            electronLog.error(`IPC Channel "${this.getName()}" found an error.`)
        }
    }
}
