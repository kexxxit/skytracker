import '../assets/styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import {CitySelection} from "../components/popups/CitySelection/CitySelection";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <div id={"appWrapper"} className="app-wrapper">
                <Header/>
                <Main/>
                <Footer/>
            </div>
            <Routes>
                <Route path={'/city'} element={<CitySelection/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
