import React, {useState} from "react";
import styles from "./Search.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export function Search() {
    const [value, setValue] = useState('');
    return (
        <section className={styles.containerSearch}>
            <section className={styles.input}>
                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
                <input
                    className={styles.start__app__input__effect}
                    id="search"
                    type="search"
                    placeholder="Search..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <span className={styles.start__app__input__focus__border}></span>
            </section>
        </section>
    )
}