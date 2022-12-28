import { Link } from 'react-router-dom'
import { StateScreens } from '../../screens/@types/screens'

interface ILinkScreen {
    screen: StateScreens
}

export function LinkScreen({ screen }: ILinkScreen) {
    return (
        <Link
            to={`${screen}`}
            className={`rounded-lg bg-giorno-pallete-300 text-white font-bold w-[50%] 
                            h-12 flex items-center justify-center text-lg hover:opacity-90 `}
        >
            Ir para
            {screen === 'schedule'
                ? ' os horários'
                : screen === 'course'
                ? ' os cursos'
                : screen === 'building'
                ? ' os prédios'
                : ' as estatísticas'}
        </Link>
    )
}
