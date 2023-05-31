import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import mainReducer from "./reducers/mainReducer";
import thunk from "redux-thunk";
import cityReducer from "./reducers/cityReducer";


let reducers = combineReducers({
    mainPage: mainReducer,
    cityPage: cityReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store