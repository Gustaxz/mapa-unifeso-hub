import { StateScreens } from '../../screens/Home'

interface ITitleHome {
    screen: StateScreens
}

export function TitleHome({ screen }: ITitleHome) {
    return (
        <>
            {screen === 'schedule' ? (
                <p className="text-5xl text-giorno-pallete-300 font-bold max-w-[90%] animate__animated animate__fadeInLeft">
                    Delete, Vizualize ou Cadastre Horários
                </p>
            ) : null}
            {screen === 'building' ? (
                <p className="text-5xl text-giorno-pallete-300 font-bold max-w-[90%] animate__animated animate__fadeInLeft">
                    Delete, Vizualize ou Cadastre Prédios
                </p>
            ) : null}
            {screen === 'course' ? (
                <p className="text-5xl text-giorno-pallete-300 font-bold max-w-[90%] animate__animated animate__fadeInLeft">
                    Delete, Vizualize ou Cadastre Cursos
                </p>
            ) : null}
            {screen === 'statistics' ? (
                <p className="text-5xl text-giorno-pallete-300 font-bold max-w-[90%] animate__animated animate__fadeInLeft">
                    Vizualize as Estatísticas
                </p>
            ) : null}
        </>
    )
}
