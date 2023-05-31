import '../assets/styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "../components/header/HeaderContainer";
import MainContainer from "../components/main/MainContainer";
import Footer from "../components/footer/Footer";
import {Provider} from "react-redux";
import store from "../state/store";
import CitySelectionContainer from "../components/popups/сity-selection/CitySelectionContainer";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <MainContainer/>
                    <Footer/>
                </div>
                <Routes>
                    <Route path={'/city'} element={<CitySelectionContainer/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default App;
