import {weatherAPI} from "../../api/api";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {convert} from "../../utils/converter/converter";

interface OpenWeatherResponse {
    city: {
        id: number;
        name: string;
        timezone: number;
    }
    list: WeatherData[]
}

interface WeatherData {
    dt: number
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
        temp_kf: number
    }
    weather: WeatherCondition[]
    wind: {
        speed: number;
    }
    dt_txt: string
    isCurrentWeather: boolean
    weatherForDate: string
}

interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface WeatherState {
    weatherData: WeatherData,
    weatherDetail: WeatherData[],
    timezone: number,
    isInitialized: boolean
}

let initialState: WeatherState = {
    weatherData: {
        dt: 0,
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            temp_kf: 0
        },
        weather: [{
            id: 0,
            main: "",
            description: "",
            icon: ""
        }],
        wind: {
            speed: 0
        },
        dt_txt: "",
        isCurrentWeather: true,
        weatherForDate: ""
    },
    weatherDetail: [{
        dt: 0,
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            temp_kf: 0
        },
        weather: [{
            id: 0,
            main: "",
            description: "",
            icon: ""
        }],
        wind: {
            speed: 0
        },
        dt_txt: "",
        isCurrentWeather: true,
        weatherForDate: ""
    }],
    timezone: 0,
    isInitialized: false
}

export const fetchWeatherData = createAsyncThunk<OpenWeatherResponse, string>(
    'products/fetchWeatherData',
    async (city: string) => {
        const response = await weatherAPI.getWeatherData(city)
        console.log(response.data)
        return convert(response.data)
    }
)

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsInitialized: (state, action: PayloadAction<boolean>) => {
            state.isInitialized = action.payload
        },
        setWeatherData: (state, action: PayloadAction<WeatherData>) => {
            state.weatherData = {...action.payload}
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.weatherData = {...action.payload.list[0], isCurrentWeather: true, weatherForDate: ""}
            state.weatherDetail = action.payload.list
            state.timezone = action.payload.city.timezone / 3600
            state.isInitialized = true
        })
        builder.addCase(fetchWeatherData.rejected, () => {
            console.log('Ошибка получения погоды')
        })
    }
    // extraReducers: {
    //     [fetchWeatherData.fulfilled]: (state, action) => {
    //         state.weatherData = {...action.payload.list[0], isCurrentWeather: true, weatherForDate: ""}
    //         state.weatherDetail = action.payload.list
    //         state.timezone = action.payload.city.timezone / 3600
    //         state.isInitialized = true
    //     },
    //     [fetchWeatherData.rejected]: (state, action) => {
    //         console.log('Ошибка получения погоды')
    //     },
    // }
})

export const {setIsInitialized, setWeatherData} = mainSlice.actions

export default mainSlice.reducer