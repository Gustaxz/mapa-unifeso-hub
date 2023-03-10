import { InMemoryScheduleRepository } from '../../tests/repositories/in-memory-repository'
import { Course } from '../entities/Course'
import { Period } from '../entities/Period'
import { CreateSchedule } from './create-schedule'
import { DeleteSchedule } from './delete-schedule'

describe('Delete schedule', () => {
    it('should be able to delete an schedule', async () => {
        const scheduleRepository = new InMemoryScheduleRepository()
        const createSchedule = new CreateSchedule(scheduleRepository)
        const deleteSchedule = new DeleteSchedule(scheduleRepository)

        const { schedule } = await createSchedule.execute({
            course: new Course('ccomp'),
            day: 'Segunda',
            hour: '17:00:00',
            period: new Period(3),
            container: 'Afif',
        })

        await deleteSchedule.execute(schedule)

        expect(scheduleRepository.schedules).toHaveLength(0)
    })
})
