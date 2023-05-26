import React from "react";
import styles from "./header.module.css"
import logo from "../../assets/imgs/logo.svg"

function Header() {
    return (
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
                <span>Красноярск</span>
                <div className={"button"}>
                    <a>Выбрать город</a>
                </div>
            </div>
        </header>
    )
}

export default Header