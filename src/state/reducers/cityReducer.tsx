import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type City = {
    city_id: string,
    country_id: string,
    region_id: string,
    name: string
}

interface CityState {
    city: string,
    cityList: City[]
}

let initialState: CityState = {
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

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload
        },
        setCityList: (state, action: PayloadAction<City[]>) => {
            state.cityList = action.payload
        },
        setInitialCities: (state) => {
            state.cityList = [
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
    },
})

export const {setCity, setCityList, setInitialCities} = citySlice.actions

export default citySlice.reducer