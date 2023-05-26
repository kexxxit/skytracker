export const convert = (weather) => {
    weather.list.forEach(elem => {
        elem.main.temp = Math.round(elem.main.temp)
        elem.main.feels_like = Math.round(elem.main.feels_like)
        elem.main.temp_max = Math.round(elem.main.temp_max)
        elem.main.temp_min = Math.round(elem.main.temp_min)
        elem.main.pressure = Math.round(elem.main.pressure * 0.75)
        elem.wind.speed = Math.round(elem.wind.speed)
    })
    return weather
}