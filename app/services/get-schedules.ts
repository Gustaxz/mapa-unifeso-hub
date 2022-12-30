import { Course } from '../entities/Course'
import { Period } from '../entities/Period'
import { Schedule } from '../entities/Schedule'
import { ScheduleRepository } from '../repositories/schedule-repository'

interface GetSchedulesRequest {
    course: Course
    period: Period
    day: string
}

type GetSchedulesResponse = {
    schedules: Schedule[]
}

export class GetSchedules {
    constructor(private scheduleRepository: ScheduleRepository) {}

    async execute(request: GetSchedulesRequest): Promise<GetSchedulesResponse> {
        const { course, day, period } = request
        const schedules = await this.scheduleRepository.getSchedules(
            period,
            course,
            day
        )

        return {
            schedules,
        }
    }
}
