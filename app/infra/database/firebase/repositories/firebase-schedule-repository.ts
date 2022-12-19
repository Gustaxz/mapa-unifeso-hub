import { Schedule } from '../../../../entities/Schedule'
import { ScheduleRepository } from '../../../../repositories/schedule-repository'
import { CreateScheduleFirebase } from '../services/create-schedule-firebase'

export class FirebaseScheduleRepository implements ScheduleRepository {
    async create(schedule: Schedule): Promise<void> {
        try {
            const { course, day, hour, period } = schedule
            const createScheduleFirebase = new CreateScheduleFirebase()

            createScheduleFirebase.create(
                {
                    course,
                    day,
                    hour,
                    period,
                },
                'afif'
            )
        } catch (err) {
            console.log(err)
        }
    }

    delete(schedule: Schedule): Promise<void> {
        throw new Error('Method not implemented.')
    }

    getAll(): Promise<Schedule[]> {
        throw new Error('Method not implemented.')
    }
}
