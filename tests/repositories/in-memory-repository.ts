import { Course } from '../../app/entities/Course'
import { Period } from '../../app/entities/Period'
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

    async getSchedules(
        period: Period,
        course: Course,
        day: string
    ): Promise<Schedule[]> {
        const filter = this.schedules.filter(
            schedule =>
                schedule.period.value === period.value &&
                schedule.course.value === course.value &&
                schedule.day === day
        )

        return filter
    }

    async create(schedule: Schedule): Promise<void> {
        this.schedules.push(schedule)
    }

    async createCourse(course: Course): Promise<void> {
        this.courses.push(course)
    }

    async deleteCourse(course: Course): Promise<void> {
        const deleteCourse = this.courses.filter(
            item => item.value !== course.value
        )

        this.courses = deleteCourse
    }

    async listCourses(): Promise<string[]> {
        const courseNames: string[] = []

        this.courses.forEach(course => courseNames.push(course.value))

        return courseNames
    }
}
