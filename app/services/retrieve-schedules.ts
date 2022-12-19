import { Schedule } from '../entities/Schedule'
import { ScheduleRepository } from '../repositories/schedule-repository'

interface RetrieveSchedulesResponse {
    results: Schedule[]
}

export class RetrieveSchedules {
    constructor(private scheduleRepository: ScheduleRepository) {}

    async execute(): Promise<RetrieveSchedulesResponse> {
        const results = await this.scheduleRepository.getAll()

        return {
            results,
        }
    }
}
