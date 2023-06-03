import '../assets/styles/App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "../components/header/HeaderContainer";
import MainContainer from "../components/main/MainContainer";
import Footer from "../components/footer/Footer";
import {Provider} from "react-redux";
import store from "../state/store";
import CitySelectionContainer from "../components/popups/CitySelection/CitySelectionContainer";

function App() {
    return (
        <HashRouter>
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
        </HashRouter>
    )
}

export default App;
