import phoneCall from '../../../assets/app/phone_call.svg'
import educator from '../../../assets/app/educator.svg'
import graphs from '../../../assets/app/graphs.svg'
import town from '../../../assets/app/town.svg'
import { StateScreens } from '../../screens/@types/screens'

interface IImageScreen {
    screen: StateScreens
}

export function ImageScreen({ screen }: IImageScreen) {
    return (
        <>
            {screen === 'schedule' ? (
                <img
                    src={phoneCall}
                    alt="imagem representando a tela escolhida"
                    className="animate__animated animate__fadeIn"
                />
            ) : null}
            {screen === 'course' ? (
                <img
                    src={educator}
                    alt="imagem representando a tela escolhida"
                    className="animate__animated animate__fadeIn"
                />
            ) : null}
            {screen === 'building' ? (
                <img
                    src={town}
                    alt="imagem representando a tela escolhida"
                    className="animate__animated animate__fadeIn"
                />
            ) : null}
            {screen === 'statistics' ? (
                <img
                    src={graphs}
                    alt="imagem representando a tela escolhida"
                    className="animate__animated animate__fadeIn max-h-[85%]"
                />
            ) : null}
        </>
    )
}
