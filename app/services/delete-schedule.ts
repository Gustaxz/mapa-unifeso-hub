import { Schedule } from '../entities/Schedule'
import { ScheduleRepository } from '../repositories/schedule-repository'

type DeleteScheduleRequest = Schedule

type DeleteScheduleResponse = void

export class CreateSchedule {
    constructor(private scheduleRepository: ScheduleRepository) {}

    async execute(
        request: DeleteScheduleRequest
    ): Promise<DeleteScheduleResponse> {
        await this.scheduleRepository.delete(request)
    }
}
