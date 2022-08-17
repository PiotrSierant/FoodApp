import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";
import styles from "./Recipe.module.scss";

export function RecipeTypes({recipe}) {
    recipe.length === 0 && (recipe = ['Brak danych'])
    return (
        <div className={styles.typesAndCuisines}>
            <div className={styles.title}>
                <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
                <span>Types:</span>
            </div>
            <div className={styles.type}>
                {
                    recipe.map((element, index) => {
                        return <span key={index}>{element}</span>
                    })
                }
            </div>
        </div>
    )
}