import { Dispatch, ReactNode, SetStateAction } from 'react'

import { BsFillCalendarEventFill } from 'react-icons/bs'
import { IoSchoolSharp } from 'react-icons/io5'
import { FaBuilding } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'
import { StateScreens } from '../../screens/@types/screens'

interface IChangeScreenButton {
    setScreen: Dispatch<SetStateAction<StateScreens>>
    screen: StateScreens
}

interface IScreenButton {
    setScreen: Dispatch<SetStateAction<StateScreens>>
    screen: StateScreens
    children: ReactNode
    currentScreen: StateScreens
    screenName: string
}

function ScreenButton({
    setScreen,
    screen,
    children,
    currentScreen,
    screenName,
}: IScreenButton) {
    return (
        <div className="flex flex-col gap-3">
            <div
                className={`${
                    screen === currentScreen
                        ? 'bg-giorno-pallete-200 text-giorno-pallete-200'
                        : 'bg-giorno-pallete-400 text-giorno-pallete-400'
                } py-4 px-4 cursor-pointer rounded-xl transition-colors`}
                onClick={() => setScreen(screen)}
            >
                {children}
            </div>
            <p
                className={`${
                    screen === currentScreen
                        ? 'text-giorno-pallete-200'
                        : 'text-giorno-pallete-400'
                } font-semibold text-center transition-colors`}
            >
                {screenName}
            </p>
        </div>
    )
}

export function ChangeScreenButton({ setScreen, screen }: IChangeScreenButton) {
    return (
        <div className="flex gap-8">
            <ScreenButton
                screen={'schedule'}
                setScreen={setScreen}
                currentScreen={screen}
                screenName="Horários"
            >
                <BsFillCalendarEventFill
                    size={42}
                    className="text-white font-bold"
                />
            </ScreenButton>
            <ScreenButton
                screen={'course'}
                setScreen={setScreen}
                currentScreen={screen}
                screenName="Cursos"
            >
                <IoSchoolSharp size={42} className="text-white font-bold" />
            </ScreenButton>
            <ScreenButton
                screen={'building'}
                setScreen={setScreen}
                currentScreen={screen}
                screenName="Prédios"
            >
                <FaBuilding size={42} className="text-white font-bold" />
            </ScreenButton>
            <ScreenButton
                screen={'statistics'}
                setScreen={setScreen}
                currentScreen={screen}
                screenName="Estatísticas"
            >
                <GoGraph size={42} className="text-white font-bold" />
            </ScreenButton>
        </div>
    )
}
