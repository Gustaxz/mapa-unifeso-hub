import { Course } from '../entities/course'
import { Period } from '../entities/period'
import { Schedule } from '../entities/schedule'

export interface IFilterSchedules {
    hour: string
    container: string
}

export abstract class SchedulesProvider {
    abstract create(schedule: Schedule): Promise<void>
    abstract delete(schedule: Schedule): Promise<void>
    abstract list(): Promise<void>
    abstract getFilteredSchedules(
        course: Course,
        period: Period,
        day: string
    ): Promise<IFilterSchedules[]>
}
