import { Schedule } from '../entities/schedule'

export abstract class SchedulesProvider {
    abstract create(schedule: Schedule): Promise<void>
    abstract delete(schedule: Schedule): Promise<void>
    abstract list(): Promise<void>
}
