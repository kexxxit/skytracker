import styles from "./citySelection.module.css"
import magnifier from "../../../assets/imgs/icons/loupe.svg"
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export const CitySelection = (props) => {
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if (searchText !== '') {
            props.setCityList(searchText)
            console.log(searchText)
        } else {
            props.setInitialCities()
            console.log("пусто")
        }
    }, [searchText])

    return (
        <div className={styles.city_selection}>
            <div className={styles.city_selection__wrapper}>
                <NavLink style={{color: 'white'}} to={'/'}>X</NavLink>
                <div className={styles.city_selection__content}>
                    <div className={styles.city_selection__search}>
                        <div className={styles.city_selection__search_icon}>
                            <img src={magnifier} alt={'magnifier'}/>
                        </div>
                        <input name={'searchCity'}
                               value={searchText}
                               onChange={(e) => {
                                   setSearchText(e.target.value)
                               }}
                               className={styles.city_selection__search_input}
                               placeholder={'Найти город'}/>
                    </div>
                    <div className={styles.city_selection__list}>
                        {props.cityList}
                    </div>
                </div>
            </div>
        </div>
    )
}