import { useState } from 'react'
import { ChangeScreenButton } from '../components/Home/ChangeScreenButton'
import { ImageScreen } from '../components/Home/ImageScreen'
import { LinkScreen } from '../components/Home/LinkScreen'
import { TitleHome } from '../components/Home/TitleHome'
import { StateScreens } from './@types/screens'

export function Home() {
    const [screen, setScreen] = useState<StateScreens>('schedule')

    return (
        <div className="grid grid-rows-3 h-screen">
            <div className="row-span-2 grid grid-cols-2 py-16 px-24">
                <div className="flex flex-col justify-center gap-16">
                    <TitleHome screen={screen} />
                    <LinkScreen screen={screen}></LinkScreen>
                </div>
                <div className="flex justify-end items-center">
                    <ImageScreen screen={screen} />
                </div>
            </div>
            <div className="bg-giorno-pallete-100 border-2 border-giorno-pallete-400 rounded-tl-[10rem] flex px-24 items-center">
                <ChangeScreenButton setScreen={setScreen} screen={screen} />
            </div>
        </div>
    )
}
