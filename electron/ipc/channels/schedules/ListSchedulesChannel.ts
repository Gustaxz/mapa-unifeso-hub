import { IpcMainEvent } from 'electron'
import { Schedule } from '../../../../app/entities/Schedule'
import { SchedulesController } from '../../../../app/infra/http/controllers/schedules-controller'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'
import electronLog from 'electron-log'
import { requiredReponseChannel } from '../factories/errors/responseChannel/requiredResponseChannel'

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
                return requiredReponseChannel(event)
            }

            const scheduleContrller = new SchedulesController()
            const { allData } = await scheduleContrller.retrieveSchedules()

            responseChannel(event, allData, request.responseChannel)
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
