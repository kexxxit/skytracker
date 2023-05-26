import React from "react";
import styles from "./weatherCard.module.css"

function WeatherCard(props) {
    return <div className={"card weather_card"}>
        <div className={styles.location_data}>
            <div className={styles.city_data}>Погода в Красноярске</div>
            <div className={styles.location_date}>Сейчас 2 апреля 16:00, вск</div>
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