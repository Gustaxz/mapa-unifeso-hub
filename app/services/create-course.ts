import { ScheduleRepository } from '../repositories/schedule-repository'

type CreateCourseRequest = string

type CreateCourseResponse = void

export class CreateCourse {
    constructor(private scheduleRepository: ScheduleRepository) {}

    async execute(request: CreateCourseRequest): Promise<CreateCourseResponse> {
        await this.scheduleRepository.createCourse(request)
    }
}
