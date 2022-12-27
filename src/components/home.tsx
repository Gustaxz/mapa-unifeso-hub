import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
const electron = window.require('electron')
const remote = electron.remote
const { BrowserWindow } = remote

export function Home() {
    const location = useLocation()

    console.log(location)
    return (
        <div>
            <p>Home</p>
            <Link to="/main">Main</Link>
            <button
                onClick={() => {
                    const win = new BrowserWindow()
                    win.loadURL('https://www.electronjs.org/docs/api/remote')
                }}
            ></button>
        </div>
    )
}
