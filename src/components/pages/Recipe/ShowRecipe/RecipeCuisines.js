import React from "react";
import styles from "./Recipe.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarthEurope} from "@fortawesome/free-solid-svg-icons";

export function RecipeCuisines({recipe}) {
    recipe.length === 0 && (recipe = ['Brak danych'])
    console.log(recipe)
    return (
        <div className={styles.typesAndCuisines}>
            <div className={styles.title}>
                <FontAwesomeIcon icon={faEarthEurope} className={styles.icon} />
                <span>Cuisines:</span>
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