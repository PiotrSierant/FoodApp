import React from 'react';
import styles from "./Recipe.module.scss";


export function RecipeInstruction({recipe}) {
    return (
        <div className={styles.instruction}>
            <p>Follow the recipe below:</p>
            <ol>
                {
                    recipe.map((element,index) => {
                        return <li key={index}>{element.step}</li> })
                }
            </ol>
        </div>
    )
}