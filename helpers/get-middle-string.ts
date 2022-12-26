export function getMiddleOfString(
    value: string,
    firstParam: string,
    endParam: string
): string {
    const partialString = value.substring(value.indexOf(firstParam))
    const finalString = partialString.substring(
        0,
        partialString.indexOf(endParam)
    )

    return finalString
}
