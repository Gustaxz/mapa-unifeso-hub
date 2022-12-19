import { Schedule } from '../../src/app/entities/Schedule'
import { ScheduleRepository } from '../../src/app/repositories/schedule-repository'

export class InMemoryScheduleRepository implements ScheduleRepository {
    public schedules: Schedule[] = []

    async delete(schedule: Schedule): Promise<void> {
        const schedulesFiltered = this.schedules.filter(
            scheduleIndex =>
                scheduleIndex.course !== schedule.course &&
                scheduleIndex.day !== schedule.day &&
                scheduleIndex.hour !== schedule.hour &&
                scheduleIndex.period !== schedule.period
        )

        this.schedules = schedulesFiltered
    }

    async getAll(): Promise<Schedule[]> {
        return this.schedules
    }

    async create(schedule: Schedule): Promise<void> {
        this.schedules.push(schedule)
    }
}
