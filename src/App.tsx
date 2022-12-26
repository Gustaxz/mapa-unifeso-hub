import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

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
        <>
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
            <GlobalStyle />
            <Greetings />
        </>
    )
}
