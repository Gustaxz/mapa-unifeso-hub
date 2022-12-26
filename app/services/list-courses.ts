import { ScheduleRepository } from '../repositories/schedule-repository'

type ListCoursesResponse = {
    courses: string[]
}

export class ListCourses {
    constructor(private scheduleRepository: ScheduleRepository) {}

    async execute(): Promise<ListCoursesResponse> {
        const courses = await this.scheduleRepository.listCourses()

        return {
            courses,
        }
    }
}
