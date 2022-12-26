import { InMemoryScheduleRepository } from '../../tests/repositories/in-memory-repository'
import { Course } from '../entities/Course'
import { CreateCourse } from './create-course'
import { ListCourses } from './list-courses'

describe('List courses', () => {
    it('should be able to return all courses', async () => {
        const scheduleRepository = new InMemoryScheduleRepository()
        const createCourse = new CreateCourse(scheduleRepository)
        const retrieveCourses = new ListCourses(scheduleRepository)

        await createCourse.execute(new Course('ccomp'))

        await createCourse.execute(new Course('eng civil'))

        const { courses } = await retrieveCourses.execute()

        expect(courses).toHaveLength(2)
    })
})
