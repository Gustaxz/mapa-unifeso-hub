import { Button } from '../Button'
import { Container, Image, Text } from './styles'

export function Greetings() {
    function handleSayHello() {
        window.Main.listSchedules('retrieve-data')

        console.log('Message sent! Check main process log in terminal.')
    }

    function handleSayNotHello() {
        window.Main.createSchedule('retrieve-data', {
            course: 'ccomp',
            day: 'Segunda',
            hour: '18:00:00',
            period: undefined,
            container: 'afif',
        })

        console.log('Message sent! Check main process log in terminal.')
    }

    window.Main.on('retrieve-data', (data: any) => console.log(data))

    return (
        <Container>
            <Image
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                alt="ReactJS logo"
            />
            <Text>
                An Electron boilerplate including TypeScript, React, Jest and
                ESLint.
            </Text>
            <Button onClick={handleSayHello}>
                Send message to main process
            </Button>
            <Button onClick={handleSayNotHello}>Create an schedule</Button>
        </Container>
    )
}
