import mainReducer from "./reducers/mainReducer";
import cityReducer from "./reducers/cityReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        mainPage: mainReducer,
        cityPage: cityReducer
    },
})