import React, {useEffect, useRef} from "react";
import WeatherCard from "./Cards/WeatherCard/WeatherCard";
import styles from "./Main.module.css"
import WeatherDetail from "./WeatherDetail/WeatherDetail";
import SomeCard from "./Cards/SomeCard/SomeCard";
import {useLocation} from "react-router-dom";
import {fetchWeatherData} from "../../state/reducers/mainReducer";
import {useTypedSelector} from "../../hooks/useTypesSelector";
import {useThunkDispatch} from "../../hooks/useAppDispatch";

const MINUTE = 60000

const Main: React.FC = () => {
    const dispatch = useThunkDispatch()
    let intervalRef = useRef() as React.MutableRefObject<NodeJS.Timer>
    const city = useTypedSelector(state => state.cityPage.city)
    const {pathname} = useLocation()

    useEffect(() => {
        const wrapperStyles: CSSStyleDeclaration = document.getElementById('appWrapper')!.style

        if (wrapperStyles) {
            if (pathname === "/city") {
                wrapperStyles.overflow = "hidden"
                wrapperStyles.height = "100vh"
            } else {
                wrapperStyles.overflow = "visible"
                wrapperStyles.height = "auto"
            }
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