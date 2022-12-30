import { Course } from '../entities/Course'
import { Period } from '../entities/Period'
import { Schedule } from '../entities/Schedule'

export abstract class ScheduleRepository {
    abstract create(schedule: Schedule): Promise<void>
    abstract delete(schedule: Schedule): Promise<void>
    abstract getAll(): Promise<Schedule[]>
    abstract createCourse(course: Course): Promise<void>
    abstract deleteCourse(course: Course): Promise<void>
    abstract listCourses(): Promise<string[]>
    abstract getSchedules(
        period: Period,
        course: Course,
        day: string
    ): Promise<Schedule[]>
}
