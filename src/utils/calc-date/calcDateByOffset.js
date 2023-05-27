export const calcDateByOffset = offset => {
    const date = new Date()
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000)
    return new Date(utc + (3600000 * offset))
}