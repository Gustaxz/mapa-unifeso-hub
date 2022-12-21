import { AppModule } from '../../../app.module'
import { Schedule } from '../../../entities/Schedule'
import { CreateCourse } from '../../../services/create-course'
import { CreateSchedule } from '../../../services/create-schedule'
import { DeleteSchedule } from '../../../services/delete-schedule'
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

    async createCourse(course: string) {
        try {
            const createCourse = new CreateCourse(
                this.databaseScheduleProvioder
            )

            await createCourse.execute(course)
        } catch (error) {
            throw new Error('Ocorreu um problema ao criar os dados')
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
