import { FormCreateSchedule } from '../../components/ScheduleScreen/FormCreateSchedule'
import { SideBar } from '../../components/SideBar'

export function AddScheduleScreen() {
    return (
        <div className="grid grid-cols-8 h-screen">
            <div className="flex items-center col-span-1 py-2 px-2">
                <SideBar
                    props={{
                        screen: 'schedule',
                        add: true,
                        list: true,
                    }}
                />
            </div>
            <div className="py-6 flex flex-col gap-12 col-span-6">
                <div className="flex gap-6 items-end">
                    <p className="text-giorno-pallete-500 font-bold text-xl">
                        Cadastrar horários
                    </p>
                </div>
                <FormCreateSchedule />
            </div>
        </div>
    )
}
