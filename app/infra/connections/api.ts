import axios from 'axios'
require('dotenv').config()

console.log(process.env.SHEET_DB_URL_TEST)

export const api = axios.create({
    baseURL: process.env.SHEET_DB_URL_TEST,
})
