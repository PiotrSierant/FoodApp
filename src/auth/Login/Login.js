import React from "react";
import styles from './Login.module.scss';
import Button from '../../components/Button';
export default function Login({email, setEmail}) {
    return (
        <div className={styles.login__container2}>
            <div className={styles.input}>
                <input
                    className={styles.start__app__input__effect}
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className={styles.start__app__input__focus__border}></span>
            </div>
            <Button aria-live="polite" text={'Wyślij link logowania!'} onClick={() => console.log('Link został wysłany!')} />
        </div>
    )
}
