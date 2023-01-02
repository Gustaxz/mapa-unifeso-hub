import { Greetings } from './components/Greetings'
import { ToastContainer, toast } from 'react-toastify'
import {
    HashRouter,
    Navigate,
    redirect,
    Route,
    Routes,
    useHref,
} from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'
import { Home } from './screens/Home'
import { AddScheduleScreen } from './screens/Schedule/AddSchedule'
import { ListchedulesScreen } from './screens/Schedule/ListSchedules'
import { AddCourseScreen } from './screens/Courses/AddCourse'
import { ListCoursesScreen } from './screens/Courses/ListSCourses'
import { ReformScreen } from './screens/Reform'

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

    window.Main.on('open-courses-tray', () => console.log('tray'))

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
                {/* Home Screen */}
                <Route path="/" element={<Home />}></Route>

                {/* Schedules Screens */}
                <Route
                    path="/schedule"
                    element={<Navigate to="/schedule/add" />}
                ></Route>
                <Route
                    path="/schedule/add"
                    element={<AddScheduleScreen />}
                ></Route>
                <Route
                    path="/schedule/list"
                    element={<ListchedulesScreen />}
                ></Route>

                {/* Courses Screens */}
                <Route
                    path="/course"
                    element={<Navigate to="/course/add" />}
                ></Route>
                <Route path="/course/add" element={<AddCourseScreen />}></Route>
                <Route
                    path="/course/list"
                    element={<ListCoursesScreen />}
                ></Route>

                {/* Reform Screens */}
                <Route path="/building" element={<ReformScreen />}></Route>
                <Route path="/statistics" element={<ReformScreen />}></Route>
            </Routes>
        </HashRouter>
    )
}
