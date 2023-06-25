import {weatherAPI} from "../../api/api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {convert} from "../../utils/converter/converter";

let initialState = {
    weatherData: {},
    weatherDetail: [],
    timezone: 0,
    isInitialized: false
}

export const fetchWeatherData = createAsyncThunk(
    'products/fetchWeatherData',
    async (city) => {
        const response = await weatherAPI.getWeatherData(city)
        return convert(response.data)
    }
)

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsInitialized: (state, action) => {
            console.log(action.payload)
            state.isInitialized = action.payload
        },
    },
    extraReducers: {
        [fetchWeatherData.fulfilled]: (state, action) => {
            state.weatherData = action.payload.list[0]
            state.weatherDetail = action.payload.list
            state.timezone = action.payload.city.timezone / 3600
            state.isInitialized = true
        },
        [fetchWeatherData.rejected]: (state, action) => {
            console.log('Ошибка получения погоды')
        },
    }
})

export const {setIsInitialized} = mainSlice.actions

export default mainSlice.reducer