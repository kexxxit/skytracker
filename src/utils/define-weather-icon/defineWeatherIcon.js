import clearIcon from "../../assets/imgs/weather-icons/clear.svg"
import rainIcon from "../../assets/imgs/weather-icons/rain.svg"
import cloudsIcon from "../../assets/imgs/weather-icons/clouds.svg"
import snowIcon from "../../assets/imgs/weather-icons/snow.svg"
import thunderstormIcon from "../../assets/imgs/weather-icons/snow.svg"
import drizzleIcon from "../../assets/imgs/weather-icons/drizzle.svg"


export const defineWeatherIcon = (description) => {
    switch (description) {
        case "Thunderstorm":
            return thunderstormIcon
        case "Drizzle":
            return drizzleIcon
        case "Rain":
            return rainIcon
        case "Snow":
            return snowIcon
        case "Clear":
            return clearIcon
        case "Clouds":
            return cloudsIcon
        default:
            return clearIcon
    }
}