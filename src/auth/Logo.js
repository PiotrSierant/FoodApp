import React from "react";
import styles from './Logo.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPepperHot} from "@fortawesome/free-solid-svg-icons";
export default function Logo() {
    return (
        <div className={styles.logo__container}>
            <div className={styles.logo__start__app}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#5761B2" d="M50.1,-41.2C65.2,-35,77.8,-17.5,76.7,-1C75.7,15.5,61.1,31,46,43.5C31,56,15.5,65.6,-2.6,68.2C-20.7,70.8,-41.4,66.5,-50,53.9C-58.6,41.4,-55.1,20.7,-51.8,3.3C-48.5,-14.1,-45.4,-28.2,-36.8,-34.4C-28.2,-40.6,-14.1,-38.8,1.7,-40.5C17.5,-42.2,35,-47.4,50.1,-41.2Z" transform="translate(100 100)" />
                </svg>
                <FontAwesomeIcon icon={faPepperHot} className={styles.logo__start_app__icon} />
            </div>
            <h1 className={styles.start__app__info}>FoodApp</h1>
            <p className={styles.start__app__info__name}>by Piotr Sierant!</p>
        </div>
    )
}