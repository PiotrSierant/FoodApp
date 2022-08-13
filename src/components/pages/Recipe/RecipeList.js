import React from "react";
import {Link} from "react-router-dom";
import styles from './RecipeList.module.scss';
export default function RecipeList({recipes}) {
    return (
        <div className={styles.recipeListContainer}>
            <div className={styles.recipeList}>
                <h2 className={styles.recipeListHead}>Moje przepisy</h2>

                    {
                        recipes.map((recipe) => (
                            <Link to={`/my_recipe/${recipe.id}`} key={recipe.id} className={styles.recipeLink}>
                                <div className={styles.recipeContainer}>
                                    <h3>{recipe.title}</h3>
                                    <p>{recipe.description}</p>
                                </div>
                            </Link>
                        ))
                    }

            </div>
        </div>
    )
}