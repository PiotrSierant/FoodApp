import React from "react";
import styles from './Spinner.module.scss';

export function Spinner() {
    return (
        <div className={styles.container__spinner}>
            <span className={styles.loader}></span>
        </div>
    )
}