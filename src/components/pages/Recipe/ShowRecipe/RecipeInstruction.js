import React from 'react';
import styles from "./Recipe.module.scss";


export function RecipeInstruction({recipe}) {
    console.log(recipe)
    return (
        <div className={styles.instruction}>
            <p>Follow the recipe below:</p>
            <p dangerouslySetInnerHTML={{__html: recipe }}></p>
        </div>
    )
}