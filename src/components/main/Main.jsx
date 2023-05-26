import React from "react";
import WeatherCard from "./cards/WeatherCard";
import styles from "./main.module.css"
import WeatherDetail from "./weatherDetail/WeatherDetail";

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className={styles.cards}>
                    <WeatherCard weatherData={this.props.weatherData} />
                    <div>card</div>
                </div>
                <WeatherDetail weatherDetail={this.props.weatherDetail}/>
            </main>
        )
    }
}

export default Main