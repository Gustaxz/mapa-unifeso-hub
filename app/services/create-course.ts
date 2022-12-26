import { Course } from '../entities/Course'
import { ScheduleRepository } from '../repositories/schedule-repository'

type CreateCourseRequest = Course

type CreateCourseResponse = void

export class CreateCourse {
    constructor(private scheduleRepository: ScheduleRepository) {}

    async execute(request: CreateCourseRequest): Promise<CreateCourseResponse> {
        await this.scheduleRepository.createCourse(request)
    }
}
