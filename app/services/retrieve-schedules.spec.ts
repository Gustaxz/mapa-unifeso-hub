import { InMemoryScheduleRepository } from '../../../tests/repositories/in-memory-repository'
import { Period } from '../entities/Period'
import { CreateSchedule } from './create-schedule'
import { RetrieveSchedules } from './retrieve-schedules'

describe('Create schedule', () => {
    it('should be able to return all schedules', async () => {
        const scheduleRepository = new InMemoryScheduleRepository()
        const createSchedule = new CreateSchedule(scheduleRepository)
        const retrieveSchedules = new RetrieveSchedules(scheduleRepository)

        await createSchedule.execute({
            course: 'ccomp',
            day: 'Segunda',
            hour: '17:00:00',
            period: new Period(3),
        })

        await createSchedule.execute({
            course: 'ccomp',
            day: 'Quarta',
            hour: '17:00:00',
            period: new Period(3),
        })

        const { results } = await retrieveSchedules.execute()

        expect(results).toHaveLength(2)
    })
})
