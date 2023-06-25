import React from "react";
import styles from "./Item.module.css"
import {defineWeatherIcon} from "../../../../utils/define-weather-icon/defineWeatherIcon";

const WeatherDetailItem = props => {

    return <div className={styles.weather_item}>
        {props.isFirst ? <div>Сейчас</div> : <div>{props.time}</div>}
        <div className={styles.weather_item_text}>{props.date}</div>
        <div>{props.temp}°</div>
        <div className={styles.weather_item__img_wrapper}>
            <img className={styles.weather_item__img} src={defineWeatherIcon(props.main)} alt={'weather_img'}/>
        </div>
    </div>
}

export default WeatherDetailItem