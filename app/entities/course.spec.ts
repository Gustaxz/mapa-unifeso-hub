import { Course } from './Course'

describe('Course verification', () => {
    it('should be able to create a course', () => {
        const course = new Course('ccomp')

        expect(course).toBeTruthy()
    })
})
