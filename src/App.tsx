import { Greetings } from './components/Greetings'
import { ToastContainer, toast } from 'react-toastify'
import { HashRouter, Route, Routes } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'
import { Home } from './components/home'

type errorChannel = {
    error: string
}

export function App() {
    window.Main.on('error-channel', (data: errorChannel) => {
        toast.error(data.error, {
            position: 'top-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light', // adicionar opção dark light
        })
    })

    return (
        <HashRouter>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Routes>
                <Route path="/" element={<Home />}></Route>

                <Route path="/main" element={<Greetings />}></Route>
            </Routes>
        </HashRouter>
    )
}
