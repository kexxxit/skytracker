import React, {useEffect, useRef, useState} from "react";
import styles from "./WeatherDetail.module.css"
import WeatherDetailItem from "./Item/WeatherDetailItem"
import arrowIcon from "../../../assets/imgs/icons/arrow.svg"
import Preloader from "../../ui/Preloader";

const WeatherDetail = props => {
    const [offset, setOffset] = useState(0)
    const rightArrowRef = useRef()
    const leftArrowRef = useRef()
    const sliderRef = useRef()
    const cardRef = useRef()

    const rightArrowClickHandler = () => {
        setOffset(prevState => prevState + 1053.33)
    }

    const leftArrowClickHandler = () => {
        setOffset(prevState => prevState - 1053.33)
    }

    useEffect(() => {
        setOffset(0)
    }, [props.city])

    useEffect(() => {
        if (props.isInitialized) {
            sliderRef.current.style.right = `${offset}px`

            if (offset >= 3159.99) {
                rightArrowRef.current.style.display = 'none'
            } else {
                rightArrowRef.current.style.display = 'block'
            }

            if (offset === 0) {
                leftArrowRef.current.style.display = 'none'
            } else {
                leftArrowRef.current.style.display = 'block'
            }
        }
    }, [props.isInitialized, offset])

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
                    <img onClick={leftArrowClickHandler}
                         className={styles.weather_detail__card_icon_left}
                         src={arrowIcon}
                         alt={'left_arrow'}
                         ref={leftArrowRef}/>
                </div>
                <div ref={cardRef} className={styles.weather_detail__card_items}>
                    <div className={styles.weather_detail__card_items_slider}
                         ref={sliderRef}>{items}</div>
                </div>
                <div className={styles.weather_detail__card_icon_wrapper}>
                    <img onClick={rightArrowClickHandler}
                         className={styles.weather_detail__card_icon_right}
                         src={arrowIcon}
                         alt={'right_arrow'}
                         ref={rightArrowRef}/>
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