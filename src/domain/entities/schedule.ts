import { Course } from './course'

export interface Schedule {
    period: {
        value: string
    }
    hour: string
    day: string
    course: Course
    container: string
}
