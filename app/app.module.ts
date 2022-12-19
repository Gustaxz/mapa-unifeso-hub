import { FirebaseScheduleRepository } from './infra/database/firebase/repositories/firebase-schedule-repository'
import { ScheduleRepository } from './repositories/schedule-repository'

export class AppModule {
    public scheduleDatabaseProvider: ScheduleRepository =
        new FirebaseScheduleRepository()
}
