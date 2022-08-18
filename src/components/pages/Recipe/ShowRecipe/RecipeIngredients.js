import React from "react";
import styles from "./Recipe.module.scss";

export function RecipeIngredients({recipe}) {
    return (
            <section className={styles.ingredients}>
                <h4>Recipe Ingredients: </h4>
                <ol>
                    {
                        recipe.map((element, index) => {
                            if (element.amount) {
                                return <li key={index}>{element.amount} {element.name}</li>
                            } else {
                                return <li key={index}>{element}</li>
                            }
                        })
                    }
                </ol>
            </section>
    )
}