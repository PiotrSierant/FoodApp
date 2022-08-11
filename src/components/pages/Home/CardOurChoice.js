import React from "react";
import styles from './CardOurChoice.module.scss';

export default function CardOurChoice({title, image}) {

    return (
        <div className={styles.card1}>
            <p className={styles.title1}>{title}</p>
            <img alt={title} src={image} />
        </div>
    )
}