import { Schedule } from '../../../../entities/Schedule'
import { ScheduleRepository } from '../../../../repositories/schedule-repository'
import { CreateCourseFirebase } from '../services/create-course-firebase'
import { CreateScheduleFirebase } from '../services/create-schedule-firebase'
import { DeleteScheduleFirebase } from '../services/delete-schedule-firebase'
import { RetrievechedulesFirebase } from '../services/retrive-schedules-firebase'

export class FirebaseScheduleRepository implements ScheduleRepository {
    async createCourse(course: string): Promise<void> {
        try {
            const createCourseFirebase = new CreateCourseFirebase()
            await createCourseFirebase.execute(course)
        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    }

    async create(schedule: Schedule): Promise<void> {
        try {
            const { course, day, hour, period, container } = schedule
            const createScheduleFirebase = new CreateScheduleFirebase()

            createScheduleFirebase.execute({
                course,
                day,
                hour,
                period,
                container,
            })
        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    }

    async delete(schedule: Schedule): Promise<void> {
        try {
            const { course, day, hour, period } = schedule
            const deleteScheduleFirebase = new DeleteScheduleFirebase()

            deleteScheduleFirebase.execute({
                course,
                day,
                hour,
                period,
            })
        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    }

    async getAll(): Promise<Schedule[]> {
        try {
            const retrieveScheduleFirebase = new RetrievechedulesFirebase()
            const retrive = await retrieveScheduleFirebase.execute()

            return retrive
        } catch (error) {
            throw new Error('Ocorreu um erro')
        }
    }
}
