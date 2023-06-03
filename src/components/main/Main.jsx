import React from "react";
import WeatherCard from "./cards/WeatherCard/WeatherCard";
import styles from "./Main.module.css"
import WeatherDetail from "./WeatherDetail/WeatherDetail";
import SomeCard from "./cards/SomeCard/SomeCard";

const Main = props => (
    <main>
        <div className={styles.cards}>
            <WeatherCard isInitialized={props.isInitialized} city={props.city} weatherData={props.weatherData}
                         timezone={props.timezone}/>
            <SomeCard/>
        </div>
        <WeatherDetail isInitialized={props.isInitialized} weatherDetail={props.weatherDetail}
                       timezone={props.timezone}/>
    </main>
);

export default Main