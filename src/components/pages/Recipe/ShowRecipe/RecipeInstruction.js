import React from 'react';
import styles from "./Recipe.module.scss";


export function RecipeInstruction({recipe}) {
    return (
        <section className={styles.instruction}>
            <h4>Follow the recipe below:</h4>
            <p dangerouslySetInnerHTML={{__html: recipe }}></p>
        </section>
    )
}