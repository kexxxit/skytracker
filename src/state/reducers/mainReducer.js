import {weatherAPI} from "../../api/api";
import {convert} from "../../utils/converter/converter";

const SET_WEATHER_DATA = "SET_WEATHER_DATA"
const SET_INITIALIZED = "SET_INITIALIZED"

let initialState = {
    weatherData: {},
    weatherDetail: [],
    timezone: 0,
    isInitialized: false
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.data.list[0],
                weatherDetail: action.data.list,
                timezone: action.data.city.timezone / 3600
            }
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }

}

const setWeatherDataAction = (data) => ({type: SET_WEATHER_DATA, data})
const setInitializedAction = () => ({type: SET_INITIALIZED})

export const getWeatherData = (city) => {
    return async (dispatch) => {
        let response = await weatherAPI.getWeatherData(city)
        if (response.data.cod === "200") {
            dispatch(setWeatherDataAction(convert(response.data)))
            dispatch(setInitializedAction())
        }
    }
}


export default mainReducer

