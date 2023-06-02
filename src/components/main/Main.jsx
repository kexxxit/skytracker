import React from "react";
import WeatherCard from "./cards/weather-card/WeatherCard";
import styles from "./main.module.css"
import WeatherDetail from "./weather-detail/WeatherDetail";
import SomeCard from "./cards/some-card/SomeCard";

const Main = props => (
    <main>
        <div className={styles.cards}>
            <WeatherCard city={props.city} weatherData={props.weatherData} timezone={props.timezone}/>
            <SomeCard/>
        </div>
        <WeatherDetail weatherDetail={props.weatherDetail} timezone={props.timezone}/>
    </main>
);

export default Main