import { SideBar } from '../../components/SideBar'

export function ListCoursesScreen() {
    return (
        <div className="grid grid-cols-4 h-screen">
            <div className="flex items-center col-span-1 py-2 px-2">
                <SideBar
                    props={{
                        screen: 'course',
                        add: true,
                        list: true,
                    }}
                />
            </div>
            <p>Listar cursos</p>
        </div>
    )
}
