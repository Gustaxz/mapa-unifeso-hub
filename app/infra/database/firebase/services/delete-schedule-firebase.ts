import { Period } from '../../../../entities/Period'
import { dbPath, dbRef, firebase } from '../config/firebase'

interface DeleteScheduleFirebaseProps {
    course: string
    period: Period
    hour: string
    day: string
}

export class DeleteScheduleFirebase {
    async execute({ course, period, hour, day }: DeleteScheduleFirebaseProps) {
        try {
            const updates: any = {}

            updates[
                dbPath + 'ID' + `/${course}` + `/${period.value}` + `/${hour}`
            ] = null

            return firebase.update(dbRef, updates)
        } catch (error) {
            throw new Error('Ocorreu um erro')
        }
    }
}
