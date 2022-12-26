import { Course } from './Course'
import { Period } from './Period'

interface ScheduleProps {
    period: Period
    hour: string
    day: string
    course: Course
    container: string
}

export class Schedule {
    constructor(private props: ScheduleProps) {}

    public set period(period: Period) {
        this.props.period = period
    }

    public get period(): Period {
        return this.props.period
    }

    public get hour(): string {
        return this.props.hour
    }

    public set day(day: string) {
        this.props.day = day
    }

    public get day(): string {
        return this.props.day
    }

    public set course(course: Course) {
        this.props.course = course
    }

    public get course(): Course {
        return this.props.course
    }

    public set container(container: string) {
        this.props.container = container
    }

    public get container(): string {
        return this.props.container
    }
}
