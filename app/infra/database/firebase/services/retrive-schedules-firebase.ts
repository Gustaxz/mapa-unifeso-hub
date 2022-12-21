import { Schedule } from '../../../../entities/Schedule'
import { dbRef, firebase } from '../config/firebase'

export class RetrievechedulesFirebase {
    async execute(): Promise<Schedule[]> {
        let data: Schedule[] = []

        await firebase
            .get(
                firebase.child(
                    dbRef,
                    '1WwX5WcGfxI7kMEVW8FQuNe4NNwH3sStcw5ZNg8pAcY4ID'
                )
            )
            .then(snapshot => {
                if (snapshot.exists()) {
                    data = snapshot.val()
                }
            })
            .catch(err => {
                console.log(err)
                throw new Error(err)
            })

        return data
    }
}
