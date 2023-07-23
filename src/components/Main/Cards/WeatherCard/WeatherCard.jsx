import React, {useEffect, useRef, useState} from "react";
import styles from "./WeatherCard.module.css"
import {calcDateByOffset} from "../../../../utils/calc-date/calcDateByOffset";
import humidityIcon from "../../../../assets/imgs/icons/humidity.svg"
import pressureIcon from "../../../../assets/imgs/icons/pressure.svg"
import windIcon from "../../../../assets/imgs/icons/wind.svg"
import {defineWeatherIcon} from "../../../../utils/define-weather-icon/defineWeatherIcon";
import Preloader from "../../../ui/Preloader";
import {useSelector} from "react-redux";

const SECOND = 1000

const WeatherCard = () => {
    let dateInterval = useRef()
    const [dateStr, setDateStr] = useState("")
    const timezone = useSelector(state => state.mainPage.timezone)
    const isInitialized = useSelector(state => state.mainPage.isInitialized)
    const weatherData = useSelector(state => state.mainPage.weatherData)
    const city = useSelector(state => state.cityPage.city)

    const setDate = () => {
        const date = calcDateByOffset(timezone)
        date.locale("ru")
        setDateStr(date.format("LLLL"))
    }

    useEffect(() => {
        setDate()
        clearInterval(dateInterval.current)
        dateInterval.current = setInterval(setDate, SECOND)
    }, [isInitialized])

    return <div className={"card weather_card"}>
        {isInitialized ? <>
            <div className={styles.location_data}>
                <div className={styles.city_data}>Погода в {city}</div>
                <div
                    className={styles.location_date}>{weatherData.isCurrentWeather ? `Сейчас ${dateStr}` : `Прогноз на ${weatherData.weatherForDate}`}</div>
            </div>
            <div className={styles.weather_data}>
                <div className={styles.weather_data__temp}>{weatherData.main.temp}°</div>
                <img className={styles.weather_data__icon} src={defineWeatherIcon(weatherData.weather[0].main)}
                     alt={'weather icon'}/>
                <div className={styles.weather_data__info}>
                    <div>{weatherData.weather[0].description}</div>
                    <div>Ощущается как {weatherData.main.feels_like}°</div>
                </div>
            </div>
            <div className={styles.some_data}>
                <div className={styles.some_data__item}>
                    <img className={styles.some_data__wind_icon} src={windIcon} alt={'wind icon'}/>
                    <span>{weatherData.wind.speed} м/c</span>
                </div>
                <div className={styles.some_data__item}>
                    <img className={styles.some_data__humidity_icon} src={humidityIcon} alt={'humidity icon'}/>
                    <span>{weatherData.main.humidity}%</span>
                </div>
                <div className={styles.some_data__item}>
                    <img className={styles.some_data__pressure_icon} src={pressureIcon} alt={'pressure icon'}/>
                    <span>{weatherData.main.pressure} мм. рт. ст.</span>
                </div>
            </div>
        </> : <Preloader/>}
    </div>
};

export default WeatherCard