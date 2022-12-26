import { InMemoryScheduleRepository } from '../../tests/repositories/in-memory-repository'
import { Course } from '../entities/Course'
import { Period } from '../entities/Period'
import { CreateSchedule } from './create-schedule'
import { RetrieveSchedules } from './retrieve-schedules'

describe('Create schedule', () => {
    it('should be able to return all schedules', async () => {
        const scheduleRepository = new InMemoryScheduleRepository()
        const createSchedule = new CreateSchedule(scheduleRepository)
        const retrieveSchedules = new RetrieveSchedules(scheduleRepository)

        await createSchedule.execute({
            course: new Course('ccomp'),
            day: 'Segunda',
            hour: '17:00:00',
            period: new Period(3),
            container: 'Afif',
        })

        await createSchedule.execute({
            course: new Course('eng civil'),
            day: 'Quarta',
            hour: '17:00:00',
            period: new Period(3),
            container: 'Afif',
        })

        const { results } = await retrieveSchedules.execute()

        expect(results).toHaveLength(2)
    })
})
