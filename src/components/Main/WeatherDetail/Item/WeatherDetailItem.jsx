import React from "react";
import styles from "./Item.module.css"
import {defineWeatherIcon} from "../../../../utils/define-weather-icon/defineWeatherIcon";
import {setWeatherData} from "../../../../state/reducers/mainReducer";
import {useDispatch, useSelector} from "react-redux";

const WeatherDetailItem = props => {
    const dispatch = useDispatch()
    const weatherDetail = useSelector(state => state.mainPage.weatherDetail)

    const setWeatherCardData = () => {
        dispatch(setWeatherData(props.index !== 0 ? {
            ...weatherDetail[props.index],
            isCurrentWeather: false,
            weatherForDate: `${props.date} ${new Date().getFullYear()}г., ${props.time}.`
        } : {
            ...weatherDetail[props.index],
            isCurrentWeather: true,
            weatherForDate: ``
        }))

        props.setIsActive(props.index)
    }

    return <div onClick={setWeatherCardData} className={styles.weather_item}>
        <div
            className={props.isActive ? styles.weather_item_active : undefined}>{props.isFirst ? "Сейчас" : props.time}</div>
        <div className={styles.weather_item_text}>{props.date}</div>
        <div>{props.temp}°</div>
        <div className={styles.weather_item__img_wrapper}>
            <img className={styles.weather_item__img} src={defineWeatherIcon(props.main)} alt={'weather_img'}/>
        </div>
    </div>
}

export default WeatherDetailItem