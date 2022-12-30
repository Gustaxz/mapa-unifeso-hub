import { Course } from '../../../../entities/Course'
import { dbPath, dbRef, firebase } from '../config/firebase'

type CreateCourseFirebaseProps = Course

export class CreateCourseFirebase {
    async execute(course: CreateCourseFirebaseProps) {
        try {
            const updates: any = {}

            updates[dbPath + 'ID' + `/${course.value}`] = {
                '1': {
                    '18:00': {
                        Segunda:
                            'Afif - Não cadastrado - Não Cadastrado - Não Cadastrado',
                    },
                },
            }

            return firebase.update(dbRef, updates)
        } catch (error: any) {
            throw new Error('Não foi possível criar o curso.')
        }
    }
}
