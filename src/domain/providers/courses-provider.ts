import { Course } from '../entities/course'

export abstract class CoursesProvider {
    abstract create(course: Course): Promise<void>
    abstract list(): Promise<string[]>
    abstract delete(course: Course): Promise<void>
}
