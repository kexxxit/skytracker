import React from "react";
import styles from "./Footer.module.css"

let Footer: React.FC = () => {
    return <footer>
        <div className={styles.footer_nav}>
            <a href={"#"}>Служба поддержки</a>
            <a href={"#"}>О нас</a>
            <a href={"#"}>Оставить отзыв</a>
        </div>
        <div className={styles.footer_text}>Погода на сегодня предоставлена исключительно
            для личного некоммерческого использования.
        </div>
        <div className={styles.copyright}>©SkyTracker</div>
    </footer>
}

export default Footer