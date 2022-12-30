interface IExtractScheduleContainer {
    building: string
    classroom: string
    classroomContainer: string
    teacher: string
}

export function extractScheduleContainer(
    container: string
): IExtractScheduleContainer {
    const countHyphen = container.split('-').length - 1

    if (countHyphen < 3) {
        return {
            building: container,
            classroom: container,
            classroomContainer: container,
            teacher: container,
        }
    }

    const building = container.substring(0, container.indexOf('-'))

    const extractedBuilding = container.substring(container.indexOf('-') + 1)
    const classroom = extractedBuilding.substring(
        extractedBuilding.indexOf('-'),
        1
    )

    const extractedClassroom = extractedBuilding.substring(
        extractedBuilding.indexOf('-') + 1
    )
    const classroomContainer = extractedClassroom.substring(
        extractedClassroom.indexOf('-'),
        1
    )

    const teacher = extractedClassroom.substring(
        extractedClassroom.indexOf('-') + 1
    )

    return {
        building,
        classroom,
        classroomContainer,
        teacher,
    }
}
