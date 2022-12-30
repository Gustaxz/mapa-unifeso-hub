import { Dispatch, SetStateAction, useState } from 'react'
import {
    IFilterSchedulesFormData,
    IListFilteredSchedules,
} from '../../screens/Schedule/ListSchedules'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImSpinner8 } from 'react-icons/im'
import { ScheduleAPI } from '../../domain/api/controllers/schedule'
import { toast } from 'react-toastify'
import { CourseOptionsForm } from './CourseOptionsForm'

interface IFormFilterSchedules {
    setFilterSchedules: Dispatch<SetStateAction<IListFilteredSchedules[]>>
    setFilterParams: Dispatch<SetStateAction<IFilterSchedulesFormData>>
}

export function FormFilterSchedules({
    setFilterSchedules,
    setFilterParams,
}: IFormFilterSchedules) {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit } = useForm<IFilterSchedulesFormData>()

    const onSubmit: SubmitHandler<IFilterSchedulesFormData> = async data => {
        const scheduleApi = new ScheduleAPI()

        if (!data.course) {
            toast.info('Cadastre um curso antes', {
                position: 'top-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })

            return
        }

        if (!data.day || !data.period) {
            toast.warn('Preencha todos os campos corretamente', {
                position: 'top-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })

            return
        }

        try {
            setLoading(true)
            setFilterParams(data)
            const schedules = await scheduleApi.filterSchedules(
                { value: data.course },
                { value: data.period },
                data.day
            )

            setFilterSchedules(schedules)
            setLoading(false)
        } catch (error) {
            toast.error('Não foi possível retornar os horários.', {
                position: 'top-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
            setLoading(false)
        }
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="select-course"
                        className="text-giorno-pallete-500 text-sm"
                    >
                        Escolha o curso
                    </label>
                    <select
                        id="select-course"
                        className="rounded-lg border border-giorno-pallete-500 p-2 outline-none cursor-pointer"
                        {...register('course')}
                    >
                        <CourseOptionsForm />
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="input-period"
                        className="text-giorno-pallete-500 text-sm"
                    >
                        Insira o período
                    </label>
                    <input
                        type="text"
                        id="input-period"
                        className="rounded-lg border border-giorno-pallete-500 p-2 outline-none placeholder:text-black"
                        {...register('period')}
                        placeholder="1"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="input-day"
                        className="text-giorno-pallete-500 text-sm"
                    >
                        Insira o dia
                    </label>
                    <select
                        id="input-day"
                        className="rounded-lg border border-giorno-pallete-500 p-2 outline-none cursor-pointer"
                        {...register('day')}
                    >
                        <option value="Segunda">Segunda</option>
                        <option value="Terça">Terça</option>
                        <option value="Quarta">Quarta</option>
                        <option value="Quinta">Quinta</option>
                        <option value="Sexta">Sexta</option>
                        <option value="Sábado">Sábado</option>
                    </select>
                </div>
            </div>
            <button
                className="w-36 h-10 flex justify-center items-center bg-giorno-pallete-300 text-white font-semibold rounded-lg hover:opacity-90"
                type="submit"
            >
                {loading ? (
                    <ImSpinner8 className="animate-spin" size={16} />
                ) : (
                    'Filtrar horários'
                )}
            </button>
        </form>
    )
}
