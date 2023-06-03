import React from "react";
import styles from "./SomeCard.module.css"

const SomeCard = () => <div className={"card weather_card"}>
    <div className={styles.development}>
        <span>В разработке ;)</span>
    </div>
</div>;

export default SomeCard