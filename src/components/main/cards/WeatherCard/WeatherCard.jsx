import React, {useEffect, useState} from "react";
import styles from "./WeatherCard.module.css"
import {calcDateByOffset} from "../../../../utils/calc-date/calcDateByOffset";
import humidityIcon from "../../../../assets/imgs/icons/humidity.svg"
import pressureIcon from "../../../../assets/imgs/icons/pressure.svg"
import windIcon from "../../../../assets/imgs/icons/wind.svg"
import {defineWeatherIcon} from "../../../../utils/define-weather-icon/defineWeatherIcon";
import Preloader from "../../../ui/Preloader";

const SECOND = 1000

function WeatherCard(props) {
    const [dateStr, setDateStr] = useState("")

    const setDate = () => {
        const date = calcDateByOffset(props.timezone)
        date.locale("ru")
        setDateStr(date.format("LLLL"))

    }

    useEffect(() => {
        setDate()
    }, [props.timezone, setDate])

    useEffect(() => {
        setInterval(setDate, SECOND)
        console.log('ТАЙМЕР УСТАНОВЛЕН')
    }, [])

    return <div className={"card weather_card"}>
        {props.isInitialized ? <>
            <div className={styles.location_data}>
                <div className={styles.city_data}>Погода в {props.city}</div>
                <div className={styles.location_date}>Сейчас {dateStr}</div>
            </div>
            <div className={styles.weather_data}>
                <div className={styles.weather_data__temp}>{props.weatherData.main.temp}°</div>
                <img className={styles.weather_data__icon} src={defineWeatherIcon(props.weatherData.weather[0].main)}
                     alt={'weather icon'}/>
                <div className={styles.weather_data__info}>
                    <div>{props.weatherData.weather[0].description}</div>
                    <div>Ощущается как {props.weatherData.main.feels_like}°</div>
                </div>
            </div>
            <div className={styles.some_data}>
                <div className={styles.some_data__item}>
                    <img className={styles.some_data__wind_icon} src={windIcon} alt={'wind icon'}/>
                    <span>{props.weatherData.wind.speed} м/c</span>
                </div>
                <div className={styles.some_data__item}>
                    <img className={styles.some_data__humidity_icon} src={humidityIcon} alt={'humidity icon'}/>
                    <span>{props.weatherData.main.humidity}%</span>
                </div>
                <div className={styles.some_data__item}>
                    <img className={styles.some_data__pressure_icon} src={pressureIcon} alt={'pressure icon'}/>
                    <span>{props.weatherData.main.pressure} мм. рт. ст.</span>
                </div>
            </div>
        </> : <Preloader/>}
    </div>
}

export default WeatherCard