import React from "react";
import WeatherCard from "./cards/WeatherCard";
import styles from "./main.module.css"
import WeatherDetail from "./weatherDetail/WeatherDetail";

const Main = props => (
    <main>
        <div className={styles.cards}>
            <WeatherCard weatherData={props.weatherData} timezone={props.timezone}/>
            <div>card</div>
        </div>
        <WeatherDetail weatherDetail={props.weatherDetail} timezone={props.timezone}/>
    </main>
);

export default Main