import React from "react";
import styles from "./Recipe.module.scss";

export function RecipeImage({recipe ,alt}) {
    recipe === "" && (recipe = '/image/notFound.svg');
    return <img src={recipe} alt={alt} className={styles.image}/>
}