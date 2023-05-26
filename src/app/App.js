import '../assets/styles/App.css';
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "../components/header/HeaderContainer";
import MainContainer from "../components/main/MainContainer";
import Footer from "../components/footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <MainContainer />
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
