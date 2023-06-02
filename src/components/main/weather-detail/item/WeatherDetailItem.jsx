import React from "react";
import styles from "./item.module.css"
import weatherIcon from "../../../../assets/imgs/weather-icons/clear.svg"

const WeatherDetailItem = props => {

    return <div className={styles.weather_item}>
        {props.isFirst ? <div>Сейчас</div> : <div>{props.time}</div>}
        <div className={styles.weather_item_text}>{props.date}</div>
        <div>{props.temp}°</div>
        <img className={styles.weather_item__img} src={weatherIcon}/>
    </div>
}

export default WeatherDetailItem