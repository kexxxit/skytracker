import styles from "./CitySelection.module.css"
import magnifier from "../../../assets/imgs/icons/loupe.svg"
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {setCity, setCityList, setInitialCities} from "../../../state/reducers/cityReducer";
import {searchCities} from "../../../utils/search-cities/searchCities";
import {useDispatch, useSelector} from "react-redux";
import {setIsInitialized} from "../../../state/reducers/mainReducer";

export const CitySelection = () => {
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()
    const cityList = useSelector(state => state.cityPage.cityList)

    const handleCitySelection = (name) => {
        dispatch(setCity(name))
        dispatch(setIsInitialized(false))
    };

    const cities = cityList.map((elem) => <NavLink
        to='/'
        onClick={() => {
            handleCitySelection(elem.name)
        }}
        className={styles.city_selection__list_elem}
        key={elem.city_id}>{elem.name}</NavLink>)

    useEffect(() => {
        if (searchText !== '') {
            dispatch(setCityList(searchCities(searchText)))
        } else {
            dispatch(setInitialCities())
        }
    }, [searchText])

    return (
        <div className={styles.city_selection}>
            <div className={styles.city_selection__wrapper}>
                <NavLink className={styles.city_selection__close_btn} style={{color: 'white'}} to={'/'}>X</NavLink>
                <div className={styles.city_selection__content}>
                    <div className={styles.city_selection__search}>
                        <div className={styles.city_selection__search_icon}>
                            <img src={magnifier} alt={'magnifier'}/>
                        </div>
                        <input type={'text'}
                               name={'searchCity'}
                               value={searchText}
                               onChange={(e) => {
                                   setSearchText(e.target.value)
                               }}
                               className={styles.city_selection__search_input}
                               placeholder={'Найти город'}/>
                    </div>
                    <div className={styles.city_selection__list}>
                        {cities}
                    </div>
                </div>
            </div>
        </div>
    )
}