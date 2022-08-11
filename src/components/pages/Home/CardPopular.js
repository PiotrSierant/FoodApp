import React from "react";
import styles from './CardPopular.module.scss';

export default function CardPopular({title, image}) {

    return (
            <div className={styles.card}>
                <p className={styles.title}>{title}</p>
                <img alt={title} src={image} />
            </div>
    )
}