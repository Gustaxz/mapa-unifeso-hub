import { useState } from 'react'
import { FormFilterSchedules } from '../../components/ScheduleScreen/FormFilterSchedules'
import { ListScheduleCard } from '../../components/ScheduleScreen/ListScheduleCard'
import { SideBar } from '../../components/SideBar'
import { v4 as uuidV4 } from 'uuid'
import { extractScheduleContainer } from '../../mappers/extractScheduleContainer'

export interface IListFilteredSchedules {
    hour: string
    container: string
}

export interface IFilterSchedulesFormData {
    course: string
    period: string
    day: string
}

export function ListchedulesScreen() {
    const [filterParams, setFilterParams] = useState<IFilterSchedulesFormData>({
        course: '',
        day: '',
        period: '',
    })
    const [filterSchedules, setFilterSchedules] = useState<
        IListFilteredSchedules[]
    >([])

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
                        Listar horários
                    </p>
                </div>
                <FormFilterSchedules
                    setFilterSchedules={setFilterSchedules}
                    setFilterParams={setFilterParams}
                />
                <div className="flex flex-col gap-1">
                    <div className="grid grid-cols-7 w-[80%] px-3">
                        <p className="text-slate-500 italic text-sm">Horário</p>
                        <p className="text-slate-500 italic text-sm">Prédio</p>
                        <p className="text-slate-500 italic text-sm">
                            Professor
                        </p>
                        <p className="col-span-2 text-slate-500 italic text-sm">
                            Conteúdo
                        </p>
                        <p className="text-slate-500 italic text-sm">Sala</p>
                    </div>
                    <div className="flex flex-col gap-6 overflow-y-scroll md:h-[45vh] h-[55vh] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-giorno-pallete-300 scrollbar-thumb-rounded-md">
                        {filterSchedules.length
                            ? filterSchedules.map(schedule => (
                                  <ListScheduleCard
                                      props={{
                                          ...extractScheduleContainer(
                                              schedule.container
                                          ),
                                          hour: schedule.hour,
                                      }}
                                      key={uuidV4()}
                                      filterParams={filterParams}
                                  />
                              ))
                            : null}
                        {filterSchedules.length === 0 ? (
                            <p className="ml-2 mt-4 italic text-slate-800">
                                Nenhum horário encontrado
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
