import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',

})

export const weatherAPI = {
    getWeatherData(city: string) {
        return instance.get(`forecast?appid=8e9f3206bb232161e3e358b974dacf4f&q=${city}&units=metric&lang=ru`)
            .then(response => {
                return response
            })
    }
}

