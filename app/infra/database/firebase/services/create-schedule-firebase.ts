import { Course } from '../../../../entities/Course'
import { Period } from '../../../../entities/Period'
import { dbPath, dbRef, firebase } from '../config/firebase'

interface CreateScheduleFirebaseProps {
    course: Course
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
            let firebaseData: any[] = []
            const updates: any = {}
            const data: any = {}
            const res: any = {}
            const snapshot = await firebase.get(
                firebase.child(
                    dbRef,
                    `${dbPath}/${course.value}/${period.value}/${hour}`
                )
            )

            if (snapshot.exists()) {
                firebaseData = [snapshot.val()]
            }

            data[day] = container
            firebaseData.push(data)

            firebaseData.forEach(value => {
                Object.assign(res, value)
            })

            updates[
                dbPath + `/${course.value}` + `/${period.value}` + `/${hour}`
            ] = res

            return firebase.update(dbRef, updates)
        } catch (error: any) {
            throw new Error('Não foi possível criar o horário.')
        }
    }
}
