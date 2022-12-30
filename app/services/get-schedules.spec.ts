import { InMemoryScheduleRepository } from '../../tests/repositories/in-memory-repository'
import { Course } from '../entities/Course'
import { Period } from '../entities/Period'
import { Schedule } from '../entities/Schedule'
import { CreateSchedule } from './create-schedule'
import { GetSchedules } from './get-schedules'

describe('List schedules by params', () => {
    it('should be able to return all selected schedules', async () => {
        const scheduleRepository = new InMemoryScheduleRepository()
        const createSchedule = new CreateSchedule(scheduleRepository)
        const getSchedules = new GetSchedules(scheduleRepository)

        const { schedule } = await createSchedule.execute(
            new Schedule({
                container: 'Afif',
                course: new Course('ccomp'),
                day: 'Segunda',
                hour: '19:00',
                period: new Period(3),
            })
        )

        await createSchedule.execute(
            new Schedule({
                container: 'Afif',
                course: new Course('eng civil'),
                day: 'Terça',
                hour: '19:00',
                period: new Period(3),
            })
        )

        const { schedules } = await getSchedules.execute({
            course: new Course('ccomp'),
            day: 'Segunda',
            period: new Period(3),
        })

        expect(schedules[0]).toEqual(schedule)
    })
})
