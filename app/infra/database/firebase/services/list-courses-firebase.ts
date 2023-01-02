import { dbPath, dbRef, firebase } from '../config/firebase'

export class ListCoursesFirebase {
    async execute() {
        try {
            let allData: {} = {}
            const snapshot = await firebase.get(
                firebase.child(dbRef, `${dbPath}`)
            )

            if (snapshot.exists()) {
                allData = snapshot.val()
            }

            const courses = Object.keys(allData)

            return courses
        } catch (error) {
            throw new Error('Não foi possível retornar os cursos.')
        }
    }
}
