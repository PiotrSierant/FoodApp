import React from "react";
import { useLocation } from 'react-router-dom';
import styles from './Recipe.module.scss';
export default function Recipe() {
    const location = useLocation()
    const { recipe } = location.state
    console.log(recipe)
    return (
        <div className={styles.RecipeContainer}>
            <div className={styles.RecipeContainerBox}>
                <h3>{recipe.title}</h3>
            </div>
        </div>
    )
}