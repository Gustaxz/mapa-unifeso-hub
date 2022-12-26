import { Course } from '../entities/Course'
import { Period } from '../entities/Period'
import { Schedule } from '../entities/Schedule'
import { ScheduleRepository } from '../repositories/schedule-repository'

interface CreateScheduleRequest {
    period: Period
    hour: string
    day: string
    course: Course
    container: string
}

interface CreateScheduleResponse {
    schedule: Schedule
}

export class CreateSchedule {
    constructor(private scheduleRepository: ScheduleRepository) {}

    async execute(
        request: CreateScheduleRequest
    ): Promise<CreateScheduleResponse> {
        const schedule = new Schedule(request)

        await this.scheduleRepository.create(schedule)

        return {
            schedule,
        }
    }
}
