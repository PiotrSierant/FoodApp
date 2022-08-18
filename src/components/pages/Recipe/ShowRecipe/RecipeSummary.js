import React from "react";
import styles from "./Recipe.module.scss";
export function RecipeSummary({recipe}) {
    return <section className={styles.summary}>
        <h4>Recipe summary: </h4>
        <p dangerouslySetInnerHTML={{__html: recipe }}></p>
    </section>
}