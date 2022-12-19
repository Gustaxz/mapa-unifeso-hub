import { Period } from './Period'

interface ScheduleProps {
  period: Period
  hour: string
  day: string
  course: string
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

  public set course(course: string) {
    this.props.course = course
  }

  public get course(): string {
    return this.props.course
  }
}
