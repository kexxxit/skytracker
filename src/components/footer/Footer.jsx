import React from "react";
import styles from "./footer.module.css"

let Footer = () => {
    return <footer>
        <div className={styles.footer_nav}>
            <a className={styles.footer_nav__button} href={"#"}>Служба поддержки</a>
            <a className={styles.footer_nav__button} href={"#"}>О нас</a>
            <a className={styles.footer_nav__button} href={"#"}>Оставить отзыв</a>
        </div>
        <div className={styles.footer_text}>Погода на сегодня предоставлена исключительно
            для личного некоммерческого использования.
        </div>
        <div className={styles.copyright}>©SkyTracker</div>
    </footer>
}

export default Footer