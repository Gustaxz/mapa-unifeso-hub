import { AiOutlinePlus, AiOutlinePaperClip } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { StateScreens } from '../../screens/@types/screens'

interface ISideBar {
    props: {
        screen: StateScreens
        list?: boolean
        add?: boolean
        addWithFiles?: boolean
    }
}

export function SideBar({ props }: ISideBar) {
    const location = useLocation()
    console.log(location)
    return (
        <div className="h-full w-28 bg-giorno-pallete-400 rounded-lg flex flex-col items-center justify-center gap-4">
            {props.add ? (
                <Link
                    to={`/${props.screen}/add`}
                    className={`flex flex-col gap-1 text-white items-center justify-center w-20 h-16 bg-opacity-30 rounded-lg ${
                        location.pathname.includes('add') ? 'bg-white ' : null
                    }`}
                >
                    <AiOutlinePlus size={24} className=" font-bold" />
                    <p className="text-sm text-center">Adicionar</p>
                </Link>
            ) : null}
            {props.list ? (
                <Link
                    to={`/${props.screen}/list`}
                    className={`flex flex-col gap-1 text-white items-center justify-center w-20 h-16 bg-opacity-30 rounded-lg ${
                        location.pathname.includes('list') ? 'bg-white ' : null
                    }`}
                >
                    <AiOutlinePaperClip size={24} className=" font-bold" />
                    <p className="text-sm text-center">Listar</p>
                </Link>
            ) : null}
            <Link
                to="/"
                className={`flex flex-col gap-1 text-white items-center justify-center w-20 h-16}`}
            >
                <BsHouseDoor size={24} className=" font-bold" />
                <p className="text-sm text-center">Home</p>
            </Link>
        </div>
    )
}
