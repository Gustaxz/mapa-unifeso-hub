import { Course } from '../../../../entities/Course'
import { dbPath, dbRef, firebase } from '../config/firebase'

type DeleteCourseFirebaseProps = Course

export class DeleteCourseFirebase {
    async execute(course: DeleteCourseFirebaseProps) {
        try {
            const updates: any = {}

            updates[dbPath + `/${course.value}`] = null

            return firebase.update(dbRef, updates)
        } catch (error: any) {
            throw new Error('Não foi possível deletar o curso.')
        }
    }
}
