import { Course } from '../entities/Course'
import { ScheduleRepository } from '../repositories/schedule-repository'

type DeleteCourseRequest = Course

type DeleteCourseResponse = void

export class DeleteCourse {
    constructor(private scheduleRepository: ScheduleRepository) {}

    async execute(request: DeleteCourseRequest): Promise<DeleteCourseResponse> {
        await this.scheduleRepository.deleteCourse(request)
    }
}
