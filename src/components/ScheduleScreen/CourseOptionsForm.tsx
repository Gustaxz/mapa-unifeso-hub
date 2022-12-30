import { useEffect, useState } from 'react'
import { CourseAPI } from '../../domain/api/controllers/course'
import { v4 as uuidV4 } from 'uuid'

type ICourseOptions = string[]

export function CourseOptionsForm() {
    const [courses, setCourses] = useState<ICourseOptions>()

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
        <>
            <option value="">Cursos</option>
            {courses
                ? courses.map(item => (
                      <option value={item} key={uuidV4()}>
                          {item}
                      </option>
                  ))
                : null}
        </>
    )
}
