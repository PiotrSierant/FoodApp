import React from "react";
import styles from './Home.module.scss';
import '@splidejs/react-splide/css/default';
import Popular from "./Popular";
import OurChoice from "./OurChoice";
export const Home = () => {

    return(
        <main className={styles.homeContainer}>
            <Popular />
            <OurChoice />
        </main>
    )
}