import { Period } from '../../../../entities/Period'
import { dbPath, dbRef, firebase } from '../config/firebase'

interface CreateScheduleFirebaseProps {
    course: string
    period: Period
    hour: string
    day: string
}

export class CreateScheduleFirebase {
    async create(
        { course, period, hour, day }: CreateScheduleFirebaseProps,
        container: string
    ) {
        const updates: any = {}
        const data: any = {}

        data[day] = container

        updates[
            dbPath + 'ID' + `/${course}` + `/${period.value}` + `/${hour}`
        ] = data

        return firebase.update(dbRef, updates)
    }
}
