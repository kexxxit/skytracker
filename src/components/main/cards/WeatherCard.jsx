import React, {useEffect, useState} from "react";
import styles from "./weatherCard.module.css"
import {calcDateByOffset} from "../../../utils/calc-date/calcDateByOffset";

function WeatherCard(props) {
    const [dateStr, setDateStr] = useState("")

    const setDate = () => {
        const date = calcDateByOffset(props.timezone)
        if (date.getMinutes() > 9) {
            setDateStr(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, 
            ${date.getHours()}:${date.getMinutes()}`)
        } else {
            setDateStr(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()},
            ${date.getHours()}:0${date.getMinutes()}`)
        }
    }

    useEffect(() => {
        setDate()
    }, [props.timezone])

    useEffect(() => {

        setInterval(setDate, 1000)
    }, [])

    return <div className={"card weather_card"}>
        <div className={styles.location_data}>
            <div className={styles.city_data}>Погода в Красноярске</div>
            <div className={styles.location_date}>Сейчас {dateStr}</div>
        </div>
        <div className={styles.weather_data}>
            <div className={styles.weather_data__temp}>{props.weatherData.main.temp}°</div>
            <div>logo</div>
            <div className={styles.weather_data__info}>
                <div>{props.weatherData.weather[0].description}</div>
                <div>Ощущается как {props.weatherData.main.feels_like}°</div>
            </div>
        </div>
        <div className={styles.some_data}>
            <div>
                <span>icon</span>
                <span>{props.weatherData.wind.speed} м/c</span>
            </div>
            <div>
                <span>icon</span>
                <span>{props.weatherData.main.humidity}%</span>
            </div>
            <div>
                <span>icon</span>
                <span>{props.weatherData.main.pressure} мм. рт. ст.</span>
            </div>
        </div>
    </div>
}

export default WeatherCard