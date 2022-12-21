import { FirebaseScheduleRepository } from './infra/database/firebase/repositories/firebase-schedule-repository'
import { ScheduleRepository } from './repositories/schedule-repository'

export class AppModule {
    private scheduleDatabaseProvider: ScheduleRepository =
        new FirebaseScheduleRepository()

    public getScheduleDatabaseProvider() {
        return this.scheduleDatabaseProvider
    }
}
