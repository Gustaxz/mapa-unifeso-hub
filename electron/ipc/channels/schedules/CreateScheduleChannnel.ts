import { IpcMainEvent } from 'electron'
import { Schedule } from '../../../../app/entities/Schedule'
import { SchedulesController } from '../../../../app/infra/http/controllers/schedules-controller'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'

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
                return emitErrorChannel(event, 'Parâmetros faltando')
            }

            if (!request.responseChannel) {
                return emitErrorChannel(
                    event,
                    'É necessário um canal de resposta'
                )
            }

            const scheduleContrller = new SchedulesController()
            await scheduleContrller.createSchedule(request.params)

            responseChannel(event, 'Horário criado', request.responseChannel)
        } catch (error) {
            emitErrorChannel(event, 'Algo deu errado')
        }
    }
}
