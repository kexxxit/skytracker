import mainReducer from "./reducers/mainReducer";
import cityReducer from "./reducers/cityReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        mainPage: mainReducer,
        cityPage: cityReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch