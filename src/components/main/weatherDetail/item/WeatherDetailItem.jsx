import React from "react";
import styles from "./item.module.css"

function WeatherDetailItem(props) {
    return <div className={styles.weather_item}>
        <div>{props.time}</div>
        <div>2 апреля</div>
        <div>{props.weather}</div>
        <div>{props.temp}</div>
        <div>icon</div>
    </div>
}

export default WeatherDetailItem