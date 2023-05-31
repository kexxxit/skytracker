import React, {useEffect} from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {getWeatherData} from "../../state/reducers/mainReducer";

const MINUTE = 60000
let interval

const MainContainer = (props) => {
    useEffect(() => {
        clearInterval(interval)
        interval = setInterval(() => {
            props.getWeatherData(props.city)
        }, MINUTE)
    }, [])

    useEffect(() => {
        props.getWeatherData(props.city)
        clearInterval(interval)
        interval = setInterval(() => {
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
        city: state.cityPage.city
    }
}

export default connect(mapStateToProps, {getWeatherData})(MainContainer)