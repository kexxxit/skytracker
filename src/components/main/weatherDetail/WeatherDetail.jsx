import React from "react";
import styles from "./weatherDetail.module.css"
import WeatherDetailItem from "./item/WeatherDetailItem";

const WeatherDetail = props => {
    const items = props.weatherDetail.map(elem => <WeatherDetailItem
        temp={elem.main.temp}
        weather={elem.weather.main}
        time={elem.dt}
    />)
    return <div className={styles.weather_detail}>
        <div className={styles.weather_detail__card}>
            <span>left</span>
            <div className={styles.weather_detail__card_items}>{items}</div>
            <span>right</span>
        </div>
    </div>
};

export default WeatherDetail