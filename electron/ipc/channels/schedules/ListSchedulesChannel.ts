import { IpcMainEvent } from 'electron'
import { Schedule } from '../../../../app/entities/Schedule'
import { SchedulesController } from '../../../../app/infra/http/controllers/schedules-controller'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'

export class ListSchedulesChannel implements IpcChannelInterface<Schedule> {
    getName(): string {
        return 'list-schedules'
    }

    async handle(
        event: IpcMainEvent,
        request: IpcRequest<Schedule>
    ): Promise<void> {
        try {
            if (!request.responseChannel) {
                return emitErrorChannel(
                    event,
                    'É necessário um canal de resposta'
                )
            }

            const scheduleContrller = new SchedulesController()
            const { allData } = await scheduleContrller.retrieveSchedules()

            responseChannel(event, allData, request.responseChannel)
        } catch (error) {
            console.log(error)
            emitErrorChannel(event, 'Algo deu errado')
        }
    }
}
