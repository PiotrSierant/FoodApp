import React from "react";
import styles from './Login.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightLong} from "@fortawesome/free-solid-svg-icons";
export default function Login({email, setEmail}) {
    return (
        <div className={styles.login__container2}>
            <input
                className={styles.start__app__input}
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button aria-live="polite" className={styles.start__app__button}>
                Wyślij link logowania
                <FontAwesomeIcon icon={faRightLong} className={styles.start__app__button_arrow}/>
            </button>

        </div>
    )
}
