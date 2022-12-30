import { Course } from './course'
import { Period } from './period'

export interface Schedule {
    period: Period
    hour: string
    day: string
    course: Course
    container: string
}
