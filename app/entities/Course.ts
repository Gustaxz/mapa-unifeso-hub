export class Course {
    private course: string

    get value() {
        return this.course
    }

    constructor(course: string) {
        this.course = course
    }
}
