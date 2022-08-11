import React from "react";
import styles from './Card.module.scss';

export default function Card({title, image}) {

    return (
            <div className={styles.card}>
                <p className={styles.title}>{title}</p>
                <img alt={title} src={image} />
            </div>
    )
}