import { useState } from 'react'
import { BsTrashFill } from 'react-icons/bs'
import { ImSpinner8 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ScheduleAPI } from '../../domain/api/controllers/schedule'

interface IDeleteScheduleButton {
    props: {
        period: string
        hour: string
        day: string
        course: string
        container: string
    }
}

export function DeleteScheduleButton({ props }: IDeleteScheduleButton) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const deleteSchedule = async () => {
        try {
            const scheduleAPI = new ScheduleAPI()

            setLoading(true)
            await scheduleAPI.delete({
                container: props.container,
                course: { value: props.course },
                day: props.day,
                hour: props.hour,
                period: { value: props.period },
            })
            setLoading(false)

            toast.success('Curso deletado!', {
                position: 'top-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })

            navigate(0)
        } catch (error) {
            toast.error('Não foi possível deletar o curso.', {
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
        <button onClick={deleteSchedule} disabled={loading}>
            {loading ? (
                <ImSpinner8 className="animate-spin" size={16} />
            ) : (
                <BsTrashFill
                    size={24}
                    className="text-red-400 cursor-pointer"
                />
            )}
        </button>
    )
}
