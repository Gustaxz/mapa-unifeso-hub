import { Course } from '../../../../entities/Course'
import { Period } from '../../../../entities/Period'
import { Schedule } from '../../../../entities/Schedule'
import { ScheduleRepository } from '../../../../repositories/schedule-repository'
import { CreateCourseFirebase } from '../services/create-course-firebase'
import { CreateScheduleFirebase } from '../services/create-schedule-firebase'
import { DeleteCourseFirebase } from '../services/delete-course-firebase'
import { DeleteScheduleFirebase } from '../services/delete-schedule-firebase'
import { GetSchedulesFirebase } from '../services/get-schedules-firebase'
import { ListCoursesFirebase } from '../services/list-courses-firebase'
import { RetrievechedulesFirebase } from '../services/retrive-schedules-firebase'

export class FirebaseScheduleRepository implements ScheduleRepository {
    async createCourse(course: Course): Promise<void> {
        try {
            const createCourseFirebase = new CreateCourseFirebase()
            await createCourseFirebase.execute(course)
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar o curso.')
        }
    }

    async deleteCourse(course: Course): Promise<void> {
        try {
            const deleteCourseFirebase = new DeleteCourseFirebase()
            await deleteCourseFirebase.execute(course)
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o curso.')
        }
    }

    async listCourses(): Promise<string[]> {
        try {
            const createCourseFirebase = new ListCoursesFirebase()
            const courses = await createCourseFirebase.execute()

            return courses
        } catch (error) {
            throw new Error('Ocorreu um erro ao listar os cursos.')
        }
    }

    async create(schedule: Schedule): Promise<void> {
        try {
            const { course, day, hour, period, container } = schedule
            const createScheduleFirebase = new CreateScheduleFirebase()

            await createScheduleFirebase.execute({
                course,
                day,
                hour,
                period,
                container,
            })
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar um hor??rio.')
        }
    }

    async delete(schedule: Schedule): Promise<void> {
        try {
            const { course, day, hour, period } = schedule
            const deleteScheduleFirebase = new DeleteScheduleFirebase()

            await deleteScheduleFirebase.execute({
                course,
                day,
                hour,
                period,
            })
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar um hor??rio.')
        }
    }

    async getAll(): Promise<Schedule[]> {
        try {
            const retrieveScheduleFirebase = new RetrievechedulesFirebase()
            const retrive = await retrieveScheduleFirebase.execute()

            return retrive
        } catch (error) {
            throw new Error('Ocorreu um erro ao retornar os dados.')
        }
    }

    async getSchedules(
        period: Period,
        course: Course,
        day: string
    ): Promise<Schedule[]> {
        try {
            const getSchedulesFirebase = new GetSchedulesFirebase()
            const schedules = await getSchedulesFirebase.execute({
                course,
                day,
                period,
            })

            return schedules
        } catch (error: any) {
            throw new Error(error)
        }
    }
}
