declare global {
    // eslint-disable-next-line
    namespace NodeJS {
        // eslint-disable-next-line
        interface ProcessEnv {
            SHEET_DB_URL_TEST: string
            NODE_ENV: 'development' | 'production'
            FIREBASE_APP_ID: string
            FIREBASE_API_KEY: string
            FIREBASE_MESSAGING_SENDER_ID: string
            FIREBASE_MEASUREMENT_ID: string
            FIREBASE_DATABASE_PATH: string
        }
    }
}

export {}
