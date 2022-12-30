interface IFormatScheduleContainer {
    building: string
    teacher: string
    classroom: string
    classroomContainer: string
}

export function formatScheduleContainer({
    building,
    teacher,
    classroom,
    classroomContainer,
}: IFormatScheduleContainer) {
    const format = `${building} - ${classroom} - ${classroomContainer} - ${teacher}`

    return format
}
