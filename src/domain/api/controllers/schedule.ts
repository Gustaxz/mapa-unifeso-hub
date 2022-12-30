import { Course } from '../../entities/course'
import { Period } from '../../entities/period'
import { Schedule } from '../../entities/schedule'
import { SchedulesProvider } from '../../providers/schedules-provider'
import { SchedulesIPC } from '../ipc/schedules'

export class ScheduleAPI {
    private schedulesProvider: SchedulesProvider = new SchedulesIPC()

    async create(schedule: Schedule) {
        await this.schedulesProvider.create(schedule)
    }

    async list() {
        const schedules = await this.schedulesProvider.list()
        return schedules
    }

    async delete(schedule: Schedule) {
        await this.schedulesProvider.delete(schedule)
    }

    async filterSchedules(course: Course, period: Period, day: string) {
        try {
            const schedules = await this.schedulesProvider.getFilteredSchedules(
                course,
                period,
                day
            )

            return schedules
        } catch (error: any) {
            throw new Error(error)
        }
    }
}
