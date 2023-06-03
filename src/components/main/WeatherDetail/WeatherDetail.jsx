import React, {useEffect, useState} from "react";
import styles from "./WeatherDetail.module.css"
import WeatherDetailItem from "./Item/WeatherDetailItem"
import arrowIcon from "../../../assets/imgs/icons/arrow.svg"
import Preloader from "../../ui/Preloader";

const WeatherDetail = props => {
    const [offset, setOffset] = useState(0)

    const rightArrowClickHandler = () => {
        setOffset(offset + 1053.33)
    }

    const leftArrowClickHandler = () => {
        setOffset(offset - 1053.33)
    }

    useEffect(() => {
        if (props.isInitialized) {
            document.getElementById('weather_detail__card_items_slider').style.right = `${offset}px`

            const rightArrow = document.getElementById('right_arrow')
            const leftArrow = document.getElementById('left_arrow')

            if (offset === 3159.99) {
                rightArrow.style.display = 'none'
            } else {
                rightArrow.style.display = 'block'
            }

            if (offset === 0) {
                leftArrow.style.display = 'none'
            } else {
                leftArrow.style.display = 'block'
            }
        }
    }, [offset])

    const items = props.weatherDetail.map((elem, index) => <WeatherDetailItem
        key={index}
        isFirst={index === 0}
        temp={elem.main.temp}
        weather={elem.weather[0].description}
        main={elem.weather[0].main}
        time={elem.dt}
        date={elem.dt_txt}
    />)

    return <div className={styles.weather_detail}>
        <div className={styles.weather_detail__title}>
            <span>Прогноз на 5 дней</span>
        </div>
        <div className={styles.weather_detail__card}>
            {props.isInitialized ? <>
                <div className={styles.weather_detail__card_icon_wrapper}>
                    <img id={'left_arrow'} onClick={leftArrowClickHandler}
                         className={styles.weather_detail__card_icon_left}
                         src={arrowIcon}
                         alt={'left_arrow'}/>
                </div>
                <div className={styles.weather_detail__card_items}>
                    <div id={'weather_detail__card_items_slider'}
                         className={styles.weather_detail__card_items_slider}>{items}</div>
                </div>
                <div className={styles.weather_detail__card_icon_wrapper}>
                    <img id={'right_arrow'} onClick={rightArrowClickHandler}
                         className={styles.weather_detail__card_icon_right}
                         src={arrowIcon}
                         alt={'right_arrow'}/>
                </div>

            </> : <>
                <div></div>
                <div className={styles.preloader_wrapper}><Preloader/></div>
                <div></div>
            </>}
        </div>
    </div>
};

export default WeatherDetail