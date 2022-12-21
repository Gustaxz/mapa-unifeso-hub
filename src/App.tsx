import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'

export function App() {
    window.Main.on('error-channel', (data: any) => alert(data.error))

    return (
        <>
            <GlobalStyle />
            <Greetings />
        </>
    )
}
