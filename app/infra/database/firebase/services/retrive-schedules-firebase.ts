import { Schedule } from '../../../../entities/Schedule'
import { dbPath, dbRef, firebase } from '../config/firebase'

export class RetrievechedulesFirebase {
    async execute(): Promise<Schedule[]> {
        try {
            let data: Schedule[] = []

            const snapshot = await firebase.get(firebase.child(dbRef, dbPath))
            if (snapshot.exists()) {
                data = snapshot.val()
            }

            return data
        } catch (error) {
            throw new Error('Não foi possível retornar os horários')
        }
    }
}
