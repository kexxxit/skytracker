import citiesList from '../../assets/cities/city_ru.json'
import {searchCities} from "../../utils/search-cities/searchCities";

let initialState = {
    city: 'Красноярск',
    cityList: [
        {
            "city_id": "4400",
            "country_id": "3159",
            "region_id": "4312",
            "name": "Москва"
        },
        {
            "city_id": "4962",
            "country_id": "3159",
            "region_id": "4925",
            "name": "Санкт-Петербург"
        },
        {
            "city_id": "5269",
            "country_id": "3159",
            "region_id": "5246",
            "name": "Казань"
        },
        {
            "city_id": "3612",
            "country_id": "3159",
            "region_id": "3563",
            "name": "Нижний Новгород"
        },
        {
            "city_id": "4094",
            "country_id": "3159",
            "region_id": "4052",
            "name": "Сочи"
        },
        {
            "city_id": "5646",
            "country_id": "3159",
            "region_id": "5625",
            "name": "Ярославль"
        },
        {
            "city_id": "4363",
            "country_id": "3159",
            "region_id": "4312",
            "name": "Калининград"
        },
        {
            "city_id": "4741",
            "country_id": "3159",
            "region_id": "4734",
            "name": "Владивосток"
        },
        {
            "city_id": "4149",
            "country_id": "3159",
            "region_id": "4105",
            "name": "Красноярск"
        },
        {
            "city_id": "5106",
            "country_id": "3159",
            "region_id": "5080",
            "name": "Екатеринбург"
        },
    ]
}

const SET_CITY = 'SET_CITY'
const SET_CITY_LIST = 'SET_CITY_LIST'

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: action.city
            }
        case SET_CITY_LIST:
            return {
                ...state,
                cityList: action.cityList
            }
        default:
            return state
    }
}

const setCityAction = (city) => ({type: SET_CITY, city})
const setCityListAction = (cityList) => ({type: SET_CITY_LIST, cityList})

export const setCity = (city) => {
    return (dispatch) => {
        dispatch(setCityAction(city))
    }
}

export const setCityList = (query) => {
    const citiesByQuery = searchCities(query, citiesList)
    return (dispatch) => {
        dispatch(setCityListAction(citiesByQuery))
    }
}

export const setInitialCities = () => {
    const initialCities = [
        {
            "city_id": "4400",
            "country_id": "3159",
            "region_id": "4312",
            "name": "Москва"
        },
        {
            "city_id": "4962",
            "country_id": "3159",
            "region_id": "4925",
            "name": "Санкт-Петербург"
        },
        {
            "city_id": "5269",
            "country_id": "3159",
            "region_id": "5246",
            "name": "Казань"
        },
        {
            "city_id": "3612",
            "country_id": "3159",
            "region_id": "3563",
            "name": "Нижний Новгород"
        },
        {
            "city_id": "4094",
            "country_id": "3159",
            "region_id": "4052",
            "name": "Сочи"
        },
        {
            "city_id": "5646",
            "country_id": "3159",
            "region_id": "5625",
            "name": "Ярославль"
        },
        {
            "city_id": "4363",
            "country_id": "3159",
            "region_id": "4312",
            "name": "Калининград"
        },
        {
            "city_id": "4741",
            "country_id": "3159",
            "region_id": "4734",
            "name": "Владивосток"
        },
        {
            "city_id": "4149",
            "country_id": "3159",
            "region_id": "4105",
            "name": "Красноярск"
        },
        {
            "city_id": "5106",
            "country_id": "3159",
            "region_id": "5080",
            "name": "Екатеринбург"
        },
    ]
    return (dispatch) => {
        dispatch(setCityListAction(initialCities))
    }
}

export default cityReducer