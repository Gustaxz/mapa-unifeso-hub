import { Schedule } from '../../entities/schedule'
import { SchedulesProvider } from '../../providers/schedules-provider'
import { IIPCResponse } from './interfaces/response'

export class SchedulesIPC implements SchedulesProvider {
    async create(schedule: Schedule): Promise<void> {
        return new Promise((resolve, reject) => {
            window.Main.createSchedule('response-create-schedule', schedule)
            window.Main.on(
                'response-create-schedule',
                (data: IIPCResponse<any>) => {
                    if (data.data) {
                        return resolve(data.data)
                    } else {
                        reject(new Error('Não foi possível criar o horário'))
                    }
                }
            )
        })
    }

    async delete(schedule: Schedule): Promise<void> {
        return new Promise((resolve, reject) => {
            window.Main.deleteSchedule('response-delete-schedule', schedule)
            window.Main.on(
                'response-delete-schedule',
                (data: IIPCResponse<any>) => {
                    if (data.data) {
                        return resolve(data.data)
                    } else {
                        reject(new Error('Não foi possível deletar o horário'))
                    }
                }
            )
        })
    }

    async list(): Promise<void> {
        return new Promise((resolve, reject) => {
            window.Main.listSchedules('response-list-schedules')
            window.Main.on(
                'response-list-schedules',
                (data: IIPCResponse<{ results: any }>) => {
                    if (data.data) {
                        return resolve(data.data.results)
                    } else {
                        reject(
                            new Error('Não foi possível retornar os horários')
                        )
                    }
                }
            )
        })
    }
}
