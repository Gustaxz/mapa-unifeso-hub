import { SideBar } from '../../components/SideBar'

export function AddScheduleScreen() {
    return (
        <div className="grid grid-cols-4 h-screen">
            <div className="flex items-center col-span-1 py-2 px-2">
                <SideBar
                    props={{
                        screen: 'schedule',
                        add: true,
                        list: true,
                    }}
                />
            </div>
            <p>Adicioanr</p>
        </div>
    )
}
