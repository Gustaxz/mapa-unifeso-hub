import { IpcMainEvent } from 'electron'
import { SchedulesController } from '../../../../app/infra/http/controllers/schedules-controller'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'
import electronLog from 'electron-log'
import { requiredReponseChannel } from '../factories/errors/responseChannel/requiredResponseChannel'
import { Schedule } from '../../../../app/entities/Schedule'

export class DeleteScheduleChannel implements IpcChannelInterface<Schedule> {
    getName(): string {
        return 'delete-schedule'
    }

    async handle(
        event: IpcMainEvent,
        request: IpcRequest<Schedule>
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
            await scheduleContrller.deleteSchedule(request.params)

            responseChannel(event, 'Horário deletado', request.responseChannel)
        } catch (error) {
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }
            emitErrorChannel(
                event,
                'Não foi possível deletar o horário.',
                request.responseChannel
            )
            electronLog.error(`IPC Channel "${this.getName()}" found an error.`)
        }
    }
}
