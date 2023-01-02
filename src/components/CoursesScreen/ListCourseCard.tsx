import { DeleteCourseButton } from './DeleteCourseButton'

interface IListScheduleCard {
    props: {
        name: string
    }
}

export function ListCourseCard({ props }: IListScheduleCard) {
    const { name } = props

    return (
        <div className="grid grid-cols-3 border border-giorno-pallete-500 text-giorno-pallete-300 font-bold px-3 py-2 rounded-lg bg-gray-100 w-[80%]">
            <p className="col-span-2 line-clamp-1" title={name}>
                {name}
            </p>

            <div className="flex justify-end">
                <DeleteCourseButton
                    props={{
                        name,
                    }}
                />
            </div>
        </div>
    )
}
