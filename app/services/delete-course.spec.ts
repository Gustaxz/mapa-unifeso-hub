import { InMemoryScheduleRepository } from '../../tests/repositories/in-memory-repository'
import { Course } from '../entities/Course'
import { CreateCourse } from './create-course'
import { DeleteCourse } from './delete-course'

describe('Delete course', () => {
    it('should be able to delete a course', async () => {
        const scheduleRepository = new InMemoryScheduleRepository()
        const createCourse = new CreateCourse(scheduleRepository)
        const deleteCourse = new DeleteCourse(scheduleRepository)

        const course = new Course('ccomp')

        await createCourse.execute(course)

        await deleteCourse.execute(course)

        expect(scheduleRepository.courses).toHaveLength(0)
    })
})
