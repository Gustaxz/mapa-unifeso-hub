import { InMemoryScheduleRepository } from '../../tests/repositories/in-memory-repository'
import { Period } from '../entities/Period'
import { CreateSchedule } from './create-schedule'

describe('Create schedule', () => {
    it('should be able to create an schedule', async () => {
        const scheduleRepository = new InMemoryScheduleRepository()
        const createSchedule = new CreateSchedule(scheduleRepository)

        const { schedule } = await createSchedule.execute({
            course: 'ccomp',
            day: 'Segunda',
            hour: '17:00:00',
            period: new Period(3),
            container: 'afif',
        })

        expect(scheduleRepository.schedules).toHaveLength(1)
        expect(scheduleRepository.schedules[0]).toEqual(schedule)
    })
})
