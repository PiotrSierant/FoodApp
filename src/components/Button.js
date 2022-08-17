import React from "react";
import styles from './Button.module.scss';

export default function Button({text, onClick}) {
    const handleClick = () => {
        onClick();
    }
    return <button className={styles.button} onClick={handleClick}>{text}</button>
}
function DeleteButton({text, onClick}) {
    const handleClick = (event) => {
        event.preventDefault()
        onClick();
    }
    return <button className={styles.deleteButton} onClick={handleClick}>{text}</button>
}

export {DeleteButton}