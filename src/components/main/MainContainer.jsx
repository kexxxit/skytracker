import React, {useEffect} from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {getWeatherData} from "../../state/reducers/mainReducer";

const MainContainer = (props) => {
    useEffect(() => {
        props.getWeatherData('Красноярск')
        setInterval(() => {
            props.getWeatherData('Красноярск')
            console.log('done')
        }, 60000)
    }, [])


    return <Main {...props} />
}

let mapStateToProps = (state) => {
    return {
        weatherData: state.mainPage.weatherData,
        weatherDetail: state.mainPage.weatherDetail,
        timezone: state.mainPage.timezone
    }
}

export default connect(mapStateToProps, {getWeatherData})(MainContainer)