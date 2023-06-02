import {CitySelection} from "./CitySelection";
import {connect} from "react-redux";
import {setCity, setCityList, setInitialCities} from "../../../state/reducers/cityReducer";
import styles from "./citySelection.module.css";
import {NavLink} from "react-router-dom";

const CitySelectionContainer = (props) => {

    const handleCitySelection = (name) => {
        props.setCity(name)
    };

    const cityList = props.cityList.map((elem) => <NavLink
        to='/'
        onClick={() => {
            handleCitySelection(elem.name)
        }}
        className={styles.city_selection__list_elem}
        key={elem.city_id}>{elem.name}</NavLink>)

    return <CitySelection setInitialCities={props.setInitialCities} setCityList={props.setCityList}
                          cityList={cityList}/>
}

let mapStateToProps = (state) => {
    return {
        cityList: state.cityPage.cityList
    }
}

export default connect(mapStateToProps, {setCity, setCityList, setInitialCities})(CitySelectionContainer)