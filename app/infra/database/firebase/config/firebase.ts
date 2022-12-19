import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import * as firebase from 'firebase/database'
require('dotenv').config()

const firebaseApp = initializeApp({
    projectId: 'mapaunifeso',
    appId: process.env.FIREBASE_APP_ID,
    databaseURL: 'https://mapaunifeso-default-rtdb.firebaseio.com',
    storageBucket: 'mapaunifeso.appspot.com',
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'mapaunifeso.firebaseapp.com',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.FIREBASE_API_KEY,
})

const storage = getStorage()
const db = firebase.getDatabase()
const dbRef = firebase.ref(db)
const dbPath = '1WwX5WcGfxI7kMEVW8FQuNe4NNwH3sStcw5ZNg8pAcY4'

// export async function getDataFromDatabase() {
//     let data: any

//     await firebase
//         .get(
//             firebase.child(
//                 dbRef,
//                 '1WwX5WcGfxI7kMEVW8FQuNe4NNwH3sStcw5ZNg8pAcY4/Teste 9/1/22:00'
//             )
//         )
//         .then(snapshot => {
//             if (snapshot.exists()) {
//                 data = snapshot.val()
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })

//     return data
// }

export { storage, db, dbRef, firebaseApp, firebase, dbPath }
