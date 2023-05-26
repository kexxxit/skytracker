import React, {useEffect} from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {getWeatherData} from "../../state/reducers/mainReducer";

const MainContainer = (props) => {
    useEffect(() => {
        props.getWeatherData('Красноярск')
    }, [])

    return <Main {...props} />
}

let mapStateToProps = (state) => {
    return {
        weatherData: state.mainPage.weatherData,
        weatherDetail: state.mainPage.weatherDetail
    }
}

export default connect(mapStateToProps, {getWeatherData})(MainContainer)