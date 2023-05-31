import React from "react";
import styles from "./header.module.css"
import logo from "../../assets/imgs/logo.svg"
import {NavLink} from "react-router-dom";

const Header = props => (
    <header>
        <div className={styles.logo}>
            <img className={styles.logo_img} src={logo} alt={"logo"}/>
            <span>SkyTracker</span>
        </div>
        <nav>
            <a href={"#"}>Прогноз</a>
            <a href={"#"}>О нас</a>
            <a href={"#"}>Войти</a>
        </nav>
        <div className={styles.city_choice}>
            <span>{props.city}</span>
            <NavLink className={`button ${styles.city_choice__a}`} to={'/city'}>Выбрать город</NavLink>
        </div>
    </header>
);

export default Header