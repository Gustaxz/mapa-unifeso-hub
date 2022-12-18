import { Schedule } from '../../src/app/entities/Schedule'
import { ScheduleRepository } from '../../src/app/repositories/schedule-repository'

export class InMemoryScheduleRepository implements ScheduleRepository {
    public schedules: Schedule[] = []

    async create(schedule: Schedule): Promise<void> {
        this.schedules.push(schedule)
    }
}
