import { dbPath, dbRef, firebase } from '../config/firebase'

type CreateCourseFirebaseProps = string

export class CreateCourseFirebase {
    async execute(course: CreateCourseFirebaseProps) {
        try {
            const updates: any = {}

            updates[dbPath + 'ID' + `/${course}`] = {}

            return firebase.update(dbRef, updates)
        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    }
}
