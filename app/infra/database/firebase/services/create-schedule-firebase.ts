import { Period } from '../../../../entities/Period'
import { dbPath, dbRef, firebase } from '../config/firebase'

interface CreateScheduleFirebaseProps {
    course: string
    period: Period
    hour: string
    day: string
    container: string
}

export class CreateScheduleFirebase {
    async execute({
        course,
        period,
        hour,
        day,
        container,
    }: CreateScheduleFirebaseProps) {
        try {
            const updates: any = {}
            const data: any = {}

            data[day] = container

            updates[
                dbPath + 'ID' + `/${course}` + `/${period.value}` + `/${hour}`
            ] = data

            return firebase.update(dbRef, updates)
        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    }
}
