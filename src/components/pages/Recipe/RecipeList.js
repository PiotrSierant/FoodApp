import React from "react";
import {Link} from "react-router-dom";
import styles from './RecipeList.module.scss';
import { supabase } from "../../../auth/supabaseClient";

export default function RecipeList({recipes}) {
    const user = supabase.auth.user()
    const filteredList = recipes.filter(function (element) {
        return element.email === user.email
    });
    return (
        <div className={styles.recipeListContainer}>
            <div className={styles.recipeList}>
                <h3 className={styles.recipeListHead}>Moje przepisy</h3>
                    {
                        filteredList.map((recipe) => (
                            <Link
                                to={`/my_recipe/${recipe.id}`}
                                key={recipe.id}
                                className={styles.recipeLink}
                            >
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