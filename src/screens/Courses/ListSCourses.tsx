import { useEffect, useState } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import { ListCourseCard } from '../../components/CoursesScreen/ListCourseCard'
import { SideBar } from '../../components/SideBar'
import { CourseAPI } from '../../domain/api/controllers/course'

export function ListCoursesScreen() {
    const [courses, setCourses] = useState<string[]>()

    useEffect(() => {
        const courseAPI = new CourseAPI()
        courseAPI.list().then(courses => {
            if (courses.length === 0) {
                setCourses(undefined)
            } else {
                setCourses(courses)
            }
        })
    }, [])
    return (
        <div className="grid grid-cols-8 h-screen">
            <div className="flex items-center col-span-1 py-2 px-2">
                <SideBar
                    props={{
                        screen: 'course',
                        add: true,
                        list: true,
                    }}
                />
            </div>
            <div className="py-6 flex flex-col gap-12 col-span-6">
                <div className="flex gap-6 items-end">
                    <p className="text-giorno-pallete-500 font-bold text-xl">
                        Listar cursos
                    </p>
                </div>
                {courses ? (
                    <div className="flex flex-col gap-1">
                        <div className="grid grid-cols-3 w-[80%] px-3">
                            <p className="text-slate-500 italic text-sm col-span-2">
                                Nome
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 overflow-y-scroll h-[60vh] xl:h-[70vh] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-giorno-pallete-300 scrollbar-thumb-rounded-md">
                            {courses.map(course => (
                                <ListCourseCard props={{ name: course }} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="ml-2 mt-4 italic text-slate-800">
                        Nenhum curso encontrado
                    </p>
                )}
            </div>
        </div>
    )
}
