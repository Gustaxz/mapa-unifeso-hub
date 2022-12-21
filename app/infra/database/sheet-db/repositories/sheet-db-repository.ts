import { Schedule } from '../../../../entities/Schedule'
import { ScheduleRepository } from '../../../../repositories/schedule-repository'
import { api } from '../../../connections/axios/api'

export class SheetDBRepository implements ScheduleRepository {
    async createCourse(course: string): Promise<void> {
        throw new Error('Method not implemented.')
    }

    async create(schedule: Schedule): Promise<void> {
        try {
            await api.post('/', {
                data: {
                    Período: 4,
                    Horário: schedule.hour,
                },
            })
        } catch (err) {
            console.log(err)
        }
    }

    async delete(schedule: Schedule): Promise<void> {
        throw new Error('Method not implemented.')
    }

    async getAll(): Promise<Schedule[]> {
        throw new Error('Method not implemented.')
    }
}
