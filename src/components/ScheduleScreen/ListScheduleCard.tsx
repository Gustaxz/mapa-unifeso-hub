import { IFilterSchedulesFormData } from '../../screens/Schedule/ListSchedules'
import { DeleteScheduleButton } from './DeleteScheduleButton'

interface IListScheduleCard {
    props: {
        hour: string
        building: string
        teacher: string
        classroom: string
        classroomContainer: string
    }
    filterParams: IFilterSchedulesFormData
}

export function ListScheduleCard({ props, filterParams }: IListScheduleCard) {
    const { building, classroom, classroomContainer, hour, teacher } = props

    return (
        <div className="grid grid-cols-7 border border-giorno-pallete-500 text-giorno-pallete-300 font-bold px-3 py-2 rounded-lg bg-gray-100 w-[80%]">
            <p className="line-clamp-1" title={hour}>
                {hour}
            </p>
            <p className="line-clamp-1" title={building}>
                {building}
            </p>
            <p className="line-clamp-1" title={teacher}>
                {teacher}
            </p>
            <p className="col-span-2 line-clamp-1" title={classroomContainer}>
                {classroomContainer}
            </p>
            <p className="line-clamp-1" title={classroom}>
                {classroom}
            </p>
            <div className="flex justify-end">
                <DeleteScheduleButton
                    props={{
                        container: '',
                        course: filterParams.course,
                        day: filterParams.day,
                        hour: hour,
                        period: filterParams.period,
                    }}
                />
            </div>
        </div>
    )
}
