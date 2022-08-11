import React from "react";
import styles from './Home.module.scss';
import '@splidejs/react-splide/css/default';
import Popular from "./Popular";
export const Home = () => {

    return(
        <div className={styles.homeContainer}>
            <Popular />
        </div>
    )
}