import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImSpinner8 } from 'react-icons/im'
import { toast } from 'react-toastify'
import { CourseAPI } from '../../domain/api/controllers/course'

interface IFormInputs {
    name: string
}

export function FormCreateCourse() {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm<IFormInputs>()

    const onSubmit: SubmitHandler<IFormInputs> = async data => {
        const courseApi = new CourseAPI()

        if (!data.name) {
            toast.error('Preencha o campo de nome do curso.', {
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
        setLoading(true)
        await courseApi.create({
            value: data.name,
        })
        setLoading(false)

        toast.success('Curso criado!.', {
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

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="input-period"
                    className="text-giorno-pallete-500 text-sm"
                >
                    Nome do curso
                </label>
                <input
                    type="text"
                    id="input-period"
                    className="rounded-lg border border-giorno-pallete-500 p-2 outline-none w-[35%]"
                    {...register('name')}
                />
            </div>
            <button type="submit">
                <button
                    className="w-36 h-10 flex justify-center items-center bg-giorno-pallete-300 text-white font-semibold rounded-lg hover:opacity-90"
                    type="submit"
                >
                    {loading ? (
                        <ImSpinner8 className="animate-spin" size={16} />
                    ) : (
                        'Cadastrar curso'
                    )}
                </button>
            </button>
        </form>
    )
}
