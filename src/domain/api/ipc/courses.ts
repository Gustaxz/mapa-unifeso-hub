import { Course } from '../../entities/course'
import { CoursesProvider } from '../../providers/courses-provider'
import { IIPCResponse } from './interfaces/response'

export class CoursesIPC implements CoursesProvider {
    async create(course: Course): Promise<void> {
        return new Promise((resolve, reject) => {
            window.Main.createCourse('response-create-schedule', course)
            window.Main.on(
                'response-create-schedule',
                (data: IIPCResponse<any>) => {
                    if (data.data) {
                        return resolve(data.data)
                    } else {
                        reject(new Error('Não foi possível criar o curso'))
                    }
                }
            )
        })
    }

    async delete(course: Course): Promise<void> {
        return new Promise((resolve, reject) => {
            window.Main.deleteCourse('response-delete-course', course)
            window.Main.on(
                'response-delete-course',
                (data: IIPCResponse<any>) => {
                    if (data.data) {
                        return resolve(data.data)
                    } else {
                        reject(new Error('Não foi possível deletar o curso'))
                    }
                }
            )
        })
    }

    async list(): Promise<string[]> {
        console.log('list ipc aqui')
        return new Promise((resolve, reject) => {
            window.Main.listCourses('response-list-courses')
            console.log('enviado')
            window.Main.on(
                'response-list-courses',
                (data: IIPCResponse<{ courses: any }>) => {
                    console.log(data)
                    if (data.data) {
                        return resolve(data.data.courses)
                    } else {
                        reject(new Error('Não foi possível listas os cursos'))
                    }
                }
            )
        })
    }
}
