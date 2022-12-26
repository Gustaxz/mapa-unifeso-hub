import { Course } from '../../../../entities/Course'
import { Period } from '../../../../entities/Period'
import { dbPath, dbRef, firebase } from '../config/firebase'

interface DeleteScheduleFirebaseProps {
    course: Course
    period: Period
    hour: string
    day: string
}

export class DeleteScheduleFirebase {
    async execute({ course, period, hour, day }: DeleteScheduleFirebaseProps) {
        try {
            const updates: any = {}

            updates[
                dbPath +
                    'ID' +
                    `/${course.value}` +
                    `/${period.value}` +
                    `/${hour}` +
                    `/${day}`
            ] = null

            return firebase.update(dbRef, updates)
        } catch (error: any) {
            throw new Error('Não foi possível deletar o horário.')
        }
    }
}
