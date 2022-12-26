import { InMemoryScheduleRepository } from '../../tests/repositories/in-memory-repository'
import { Course } from '../entities/Course'

describe('Create schedule', () => {
    it('should be able to create an schedule', async () => {
        const scheduleRepository = new InMemoryScheduleRepository()
        const course = new Course('ccomp')

        scheduleRepository.createCourse(course)

        expect(scheduleRepository.courses).toHaveLength(1)
        expect(scheduleRepository.courses[0]).toEqual(course)
        expect(scheduleRepository.courses[0].value).toEqual('ccomp')
    })
})
