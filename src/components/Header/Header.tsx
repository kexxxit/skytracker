import React from "react";
import styles from "./Header.module.css"
import logo from "../../assets/imgs/logo.svg"
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypesSelector";

const Header: React.FC = () => {
    const city = useTypedSelector(state => state.cityPage.city)

    return <header>
        <div className={styles.logo}>
            <img className={styles.logo_img} src={logo} alt={"logo"}/>
            <span>SkyTracker</span>
        </div>
        <nav>
        </nav>
        <div className={styles.city_choice}>
            <span>{city}</span>
            <NavLink className={`button ${styles.city_choice__a}`} to={'/city'}>Выбрать город</NavLink>
        </div>
    </header>
}

export default Header