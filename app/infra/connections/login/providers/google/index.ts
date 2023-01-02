import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut as firebaseSignOut,
} from 'firebase/auth'
import { auth } from '../../firebase/config/firebase'

export async function signOut() {
    try {
        const out = firebaseSignOut(auth)

        return {
            out,
        }
    } catch (error) {
        throw new Error('Não foi possível deslogar.')
    }
}

export async function signInWithGoogle() {
    try {
        const result = await signInWithEmailAndPassword(
            auth,
            'guxtavogusteible@gmail.com',
            'pY7q5p4m#C#*U5z38#dNsB2NNyLQ3YfU5Vh^!duCJUHGM2$fq&$gGKjZ9qX2p9D'
        )

        return {
            result,
        }
    } catch (error) {
        console.log(error)
        throw new Error('Não foi possível concluir o login.')
    }
}
