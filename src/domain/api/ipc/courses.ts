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

    async list(): Promise<void> {
        return new Promise((resolve, reject) => {
            window.Main.listCourses('response-list-courses')
            window.Main.on(
                'response-list-courses',
                (data: IIPCResponse<{ courses: any }>) => {
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
