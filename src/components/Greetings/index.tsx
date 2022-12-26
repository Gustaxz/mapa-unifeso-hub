import { CourseAPI } from '../../domain/api/controllers/course'
import { ScheduleAPI } from '../../domain/api/controllers/schedule'
import { Button } from '../Button'
import { Container, Image, Text } from './styles'

export function Greetings() {
    const scheduleAPI = new ScheduleAPI()
    const courseAPI = new CourseAPI()

    async function handleSayHello() {
        const schedules = await scheduleAPI.list()
        console.log(schedules)

        console.log('Message sent! Check main process log in terminal.')
    }

    async function handleSayNotHello() {
        try {
            await scheduleAPI.create({
                container: 'Afif',
                course: {
                    value: 'Teste 9',
                },
                day: 'Quarta',
                hour: '20:00',
                period: {
                    value: '3',
                },
            })
        } catch (error: any) {
            console.error(error.message)
        }

        console.log('Message sent! Check main process log in terminal.')
    }

    async function handleDelete() {
        try {
            await scheduleAPI.delete({
                container: '',
                course: {
                    value: 'Teste 9',
                },
                day: 'Quarta',
                hour: '20:00',
                period: {
                    value: '3',
                },
            })
        } catch (error: any) {
            console.error(error.message)
        }

        console.log('Message sent! Check main process log in terminal.')
    }

    async function handleCreateCourse() {
        try {
            await courseAPI.create({
                value: 'Teste 999',
            })
        } catch (error: any) {
            console.error(error.message)
        }

        console.log('Message sent! Check main process log in terminal.')
    }

    async function handleList() {
        try {
            const courses = await courseAPI.list()
            console.log(courses)
        } catch (error: any) {
            console.error(error.message)
        }

        console.log('Message sent! Check main process log in terminal.')
    }

    return (
        <Container>
            <Image
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                alt="ReactJS logo"
            />
            <p className="text-blue-700">Hell</p>
            <Text>
                An Electron boilerplate including TypeScript, React, Jest and
                ESLint.
            </Text>
            <Button onClick={handleSayHello}>List schedules</Button>
            <Button onClick={handleSayNotHello}>Create an schedule</Button>
            <Button onClick={handleCreateCourse}>Create a course</Button>
            <Button onClick={handleDelete}>Delete an schedule</Button>
            <Button onClick={handleList}>List courses</Button>
        </Container>
    )
}
