import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImSpinner8 } from 'react-icons/im'
import { toast } from 'react-toastify'
import { ScheduleAPI } from '../../domain/api/controllers/schedule'
import { formatScheduleContainer } from '../../mappers/FormatScheduleContainer'
import { BuildingOptionsForm } from './BuildingOptionsForm'
import { CourseOptionsForm } from './CourseOptionsForm'

interface IFormInputs {
    course: string
    period: string
    day: string
    building: string
    classroom: string
    teacher: string
    hour: string
    classroomContainer: string
}

export function FormCreateSchedule() {
    const { register, handleSubmit, reset } = useForm<IFormInputs>()
    const [loading, setLoading] = useState(false)

    const onSubmit: SubmitHandler<IFormInputs> = async data => {
        console.log(data)
        if (!data.building || !data.course) {
            toast.warn(
                'Você precisa ter ao menos 1 curso ou prédio cadastrado',
                {
                    position: 'top-left',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                }
            )

            return
        }

        const fields = Object.keys(data)
        const emptyFields = fields.filter(field => {
            if (field !== 'course' && field !== 'building') {
                return data[field] === ''
            }
        })

        if (emptyFields.length > 0) {
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

        const scheduleAPI = new ScheduleAPI()

        try {
            setLoading(true)
            await scheduleAPI.create({
                container: formatScheduleContainer({
                    building: data.building,
                    teacher: data.teacher,
                    classroom: data.classroom,
                    classroomContainer: data.classroomContainer,
                }),
                course: { value: data.course },
                day: data.day,
                hour: data.hour,
                period: { value: data.period },
            })
            setLoading(false)
            toast.success('Curso criado!', {
                position: 'top-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
            reset()
        } catch (error) {
            setLoading(false)
            toast.error('Não foi possível criar o curso', {
                position: 'top-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="2xl:flex flex-col gap-6 2xl:max-w-[40%] grid grid-cols-2 "
        >
            <div className="flex flex-col gap-6">
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
                        Selecione o período
                    </label>
                    <input
                        type="text"
                        id="input-period"
                        className="rounded-lg border border-giorno-pallete-500 p-2 outline-none"
                        placeholder="1"
                        {...register('period')}
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
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="select-building"
                        className="text-giorno-pallete-500 text-sm"
                    >
                        Insira o prédio
                    </label>
                    <select
                        id="select-building"
                        className="rounded-lg border border-giorno-pallete-500 p-2 outline-none cursor-pointer"
                        {...register('building')}
                    >
                        <BuildingOptionsForm />
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="input-hour"
                        className="text-giorno-pallete-500 text-sm"
                    >
                        Insira o horário da aula
                    </label>
                    <input
                        type="time"
                        id="input-hour"
                        className="rounded-lg border border-giorno-pallete-500 p-2 outline-none"
                        placeholder="18:00"
                        {...register('hour')}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="input-classroom"
                        className="text-giorno-pallete-500 text-sm"
                    >
                        Número da sala
                    </label>
                    <input
                        type="text"
                        id="input-classroom"
                        className="rounded-lg border border-giorno-pallete-500 p-2 outline-none"
                        placeholder="203"
                        {...register('classroom')}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="input-teacher"
                        className="text-giorno-pallete-500 text-sm"
                    >
                        Insira o professor
                    </label>
                    <input
                        type="text"
                        id="input-teacher"
                        className="rounded-lg border border-giorno-pallete-500 p-2 outline-none"
                        placeholder="Fulano"
                        {...register('teacher')}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="input-class-container"
                        className="text-giorno-pallete-500 text-sm"
                    >
                        Insira o conteúdo da aula
                    </label>
                    <input
                        type="text"
                        id="input-class-container"
                        className="rounded-lg border border-giorno-pallete-500 p-2 outline-none"
                        placeholder="Arquitetura de computadores"
                        {...register('classroomContainer')}
                    />
                </div>
            </div>
            <button
                className="mt-3 w-36 h-10 flex justify-center items-center bg-giorno-pallete-300 text-white font-semibold rounded-lg hover:opacity-90"
                type="submit"
            >
                {loading ? (
                    <ImSpinner8 className="animate-spin" size={16} />
                ) : (
                    'Cadastrar horário'
                )}
            </button>
        </form>
    )
}
