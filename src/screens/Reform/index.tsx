import { Link } from 'react-router-dom'
import reformImage from '../../../assets/app/reform.svg'

export function ReformScreen() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-6">
            <img
                src={reformImage}
                alt="imagem de pessoas acampando"
                className="h-[60%] w-[90%]"
            />
            <p className="text-xl font-bold">
                Essa área está em reformas... sente-se e aproveite a vista!
            </p>
            <Link to="/" className="font-semibold mt-4 hover:underline">
                Voltar para tela princiapal
            </Link>
        </div>
    )
}
