import {weatherAPI} from "../../api/api";
import {convert} from "../../utils/converter/converter";

const SET_WEATHER_DATA = "SET_WEATHER_DATA"

let initialState = {
    weatherData: {
        "dt": 1685102400,
        "main": {
            "temp": 285.45,
            "feels_like": 284.12,
            "temp_min": 285.45,
            "temp_max": 287.85,
            "pressure": 1025,
            "sea_level": 1025,
            "grnd_level": 1024,
            "humidity": 53,
            "temp_kf": -2.4
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 3.37,
            "deg": 11,
            "gust": 4.7
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-05-26 12:00:00"
    },
    weatherDetail: [
        {
            "dt": 1685102400,
            "main": {
                "temp": 285.45,
                "feels_like": 284.12,
                "temp_min": 285.45,
                "temp_max": 287.85,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1024,
                "humidity": 53,
                "temp_kf": -2.4
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.37,
                "deg": 11,
                "gust": 4.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-05-26 12:00:00"
        }
    ],
    timezone: 0
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
        default:
            return state
    }

}

export const setWeatherData = (data) => ({type: SET_WEATHER_DATA, data})

export const getWeatherData = (city) => {
    return async (dispatch) => {
        let response = await weatherAPI.getWeatherData(city)
        
        if (response.data.cod === "200") {
            dispatch(setWeatherData(convert(response.data)))
        }
    }
}

export default mainReducer

