import React from "react";
import styles from './Button.module.scss';

export default function Button({text}) {
    return <button className={styles.button}>{text}</button>
}
function DeleteButton({text}) {
    return <button className={styles.deleteButton}>{text}</button>
}

export {DeleteButton}