import { AppModule } from '../../../app.module'
import { Course } from '../../../entities/Course'
import { Period } from '../../../entities/Period'
import { Schedule } from '../../../entities/Schedule'
import { CreateCourse } from '../../../services/create-course'
import { CreateSchedule } from '../../../services/create-schedule'
import { DeleteCourse } from '../../../services/delete-course'
import { DeleteSchedule } from '../../../services/delete-schedule'
import { GetSchedules } from '../../../services/get-schedules'
import { ListCourses } from '../../../services/list-courses'
import { RetrieveSchedules } from '../../../services/retrieve-schedules'

export class SchedulesController {
    private appModule = new AppModule()
    private databaseScheduleProvioder =
        this.appModule.getScheduleDatabaseProvider()

    async retrieveSchedules() {
        try {
            const retrieveSchedule = new RetrieveSchedules(
                this.databaseScheduleProvioder
            )

            const allData = await retrieveSchedule.execute()

            return {
                allData,
            }
        } catch (error) {
            throw new Error('Ocorreu um problema ao retornar os dados')
        }
    }

    async createSchedule(schedule: Schedule) {
        try {
            const createSchedule = new CreateSchedule(
                this.databaseScheduleProvioder
            )

            await createSchedule.execute(schedule)
        } catch (error) {
            throw new Error('Ocorreu um problema ao criar os dados')
        }
    }

    async createCourse(course: Course) {
        try {
            const createCourse = new CreateCourse(
                this.databaseScheduleProvioder
            )

            await createCourse.execute(course)
        } catch (error) {
            throw new Error('Ocorreu um problema ao criar os dados')
        }
    }

    async listCourses() {
        try {
            const listCourses = new ListCourses(this.databaseScheduleProvioder)

            const courses = await listCourses.execute()

            return {
                courses,
            }
        } catch (error) {
            throw new Error('Ocorreu um problema ao retornar os cursos.')
        }
    }

    async deleteCourse(course: Course) {
        try {
            const deleteCourses = new DeleteCourse(
                this.databaseScheduleProvioder
            )

            await deleteCourses.execute(course)
        } catch (error) {
            throw new Error('Ocorreu um problema ao deletar o curso.')
        }
    }

    async getSchedules(course: Course, period: Period, day: string) {
        try {
            const getSchedules = new GetSchedules(
                this.databaseScheduleProvioder
            )

            const schedules = await getSchedules.execute({
                course,
                day,
                period,
            })

            return {
                schedules,
            }
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async deleteSchedule(schedule: Schedule) {
        try {
            const createSchedule = new DeleteSchedule(
                this.databaseScheduleProvioder
            )

            await createSchedule.execute(schedule)
        } catch (error) {
            throw new Error('Ocorreu um problema ao deletar os dados')
        }
    }
}
