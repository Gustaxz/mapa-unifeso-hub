import { Course } from '../../entities/course'
import { CoursesProvider } from '../../providers/courses-provider'
import { CoursesIPC } from '../ipc/courses'

export class CourseAPI {
    private courseProvider: CoursesProvider = new CoursesIPC()

    async create(course: Course) {
        await this.courseProvider.create(course)
    }

    async list() {
        const courses = await this.courseProvider.list()

        return courses
    }
}
