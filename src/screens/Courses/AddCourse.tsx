import { FormCreateCourse } from '../../components/CoursesScreen/FormCreateCourse'
import { SideBar } from '../../components/SideBar'

export function AddCourseScreen() {
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
            <div className="py-6 flex flex-col gap-12 col-span-7">
                <div className="flex gap-6 items-end">
                    <p className="text-giorno-pallete-500 font-bold text-xl">
                        Cadastrar um curso
                    </p>
                </div>
                <FormCreateCourse />
            </div>
        </div>
    )
}
