import { Course } from './Course'
import { Period } from './Period'
import { Schedule } from './Schedule'

describe('Schedule', () => {
    it('should be able to create an schedule', () => {
        const schedule = new Schedule({
            course: new Course('ccomp'),
            day: 'Segunda',
            hour: '17:00:00',
            period: new Period(3),
            container: 'Afif',
        })

        expect(schedule).toBeTruthy()
        expect(schedule.day).toEqual('Segunda')
    })
})
