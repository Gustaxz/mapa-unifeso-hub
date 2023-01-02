import { Course } from '../../../../entities/Course'
import { Period } from '../../../../entities/Period'
import { dbPath, dbRef, firebase } from '../config/firebase'

type GetSchedulesFirebaseProps = {
    course: Course
    period: Period
    day: string
}

export class GetSchedulesFirebase {
    async execute({
        course,
        period,
        day,
    }: GetSchedulesFirebaseProps): Promise<any[]> {
        try {
            const schedules: any[] = []
            let convertData: any[] = []
            let firebaseData: any[] = []

            const snapshot = await firebase.get(
                firebase.child(dbRef, `${dbPath}`)
            )

            if (snapshot.exists()) {
                firebaseData = snapshot.val()[course.value][period.value]
            }

            if (firebaseData) {
                convertData = Object.entries(firebaseData)
            }

            convertData.forEach(data => {
                if (data[1][day]) {
                    schedules.push({
                        hour: data[0],
                        container: data[1][day],
                    })
                }
            })

            return schedules
        } catch (error: any) {
            throw new Error('Não foi possível listar os horários')
        }
    }
}
