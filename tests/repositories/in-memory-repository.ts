import { Course } from '../../app/entities/Course'
import { Schedule } from '../../app/entities/Schedule'
import { ScheduleRepository } from '../../app/repositories/schedule-repository'

export class InMemoryScheduleRepository implements ScheduleRepository {
    public schedules: Schedule[] = []
    public courses: Course[] = []

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

    async createCourse(course: Course): Promise<void> {
        this.courses.push(course)
    }

    async listCourses(): Promise<string[]> {
        const courseNames: string[] = []

        this.courses.forEach(course => courseNames.push(course.value))

        return courseNames
    }
}
