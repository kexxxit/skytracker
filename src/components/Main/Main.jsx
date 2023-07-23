import React, {useEffect, useRef} from "react";
import WeatherCard from "./Cards/WeatherCard/WeatherCard";
import styles from "./Main.module.css"
import WeatherDetail from "./WeatherDetail/WeatherDetail";
import SomeCard from "./Cards/SomeCard/SomeCard";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {fetchWeatherData} from "../../state/reducers/mainReducer";

const MINUTE = 60000

const Main = () => {
    const dispatch = useDispatch()
    let intervalRef = useRef()
    const city = useSelector(state => state.cityPage.city)
    const {pathname} = useLocation()

    useEffect(() => {
        const wrapperStyles = document.getElementById('appWrapper').style
        if (pathname === "/city") {
            wrapperStyles.overflow = "hidden"
            wrapperStyles.height = "100vh"
        } else {
            wrapperStyles.overflow = "visible"
            wrapperStyles.height = "auto"
        }
    }, [pathname])

    useEffect(() => {
        clearInterval(intervalRef.current)
        dispatch(fetchWeatherData(city))
        intervalRef.current = setInterval(() => {
            dispatch(fetchWeatherData(city))
        }, MINUTE)
    }, [city])

    return <main>
        <div className={styles.cards}>
            <WeatherCard/>
            <SomeCard/>
        </div>
        <WeatherDetail/>
    </main>
}

export default Main