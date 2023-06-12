import React, {useEffect, useRef} from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {getWeatherData} from "../../state/reducers/mainReducer";

const MINUTE = 60000

const MainContainer = (props) => {
    let intervalRef = useRef()

    useEffect(() => {
        clearInterval(intervalRef.current)
        props.getWeatherData(props.city)
        intervalRef.current = setInterval(() => {
            props.getWeatherData(props.city)
        }, MINUTE)
    }, [props.city])


    return <Main {...props} />
}

let mapStateToProps = (state) => {
    return {
        weatherData: state.mainPage.weatherData,
        weatherDetail: state.mainPage.weatherDetail,
        timezone: state.mainPage.timezone,
        city: state.cityPage.city,
        isInitialized: state.mainPage.isInitialized
    }
}

export default connect(mapStateToProps, {getWeatherData})(MainContainer)