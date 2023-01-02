import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY
const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID
const FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID
const FIREBASE_DATABASE_PATH = process.env.FIREBASE_DATABASE_PATH

const firebaseApp = initializeApp({
    projectId: 'mapaunifeso',
    appId: FIREBASE_APP_ID,
    databaseURL: 'https://mapaunifeso-default-rtdb.firebaseio.com',
    storageBucket: 'mapaunifeso.appspot.com',
    apiKey: FIREBASE_API_KEY,
    authDomain: 'mapaunifeso.firebaseapp.com',
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    measurementId: FIREBASE_API_KEY,
})

export const auth = getAuth(firebaseApp)
