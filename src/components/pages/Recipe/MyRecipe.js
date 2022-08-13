import React, {useEffect, useState} from "react";
import RecipeList from "./RecipeList";
import styles from "../../../auth/Auth.module.scss";

export const MyRecipe = () => {
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect( () => {
        fetch('http://localhost:8000/recipes')
            .then(res => {
                if(!res.ok) {
                    throw Error('Nie można pobrać danych');
                }
                return res.json();
            })
            .then(data => {
                setLoading(false);
                setRecipes(data);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError(error.message)
            })
    }, [])
    return (
        <div>
            { error && <div>{error}</div> }
            {loading ? (
                <div className={styles.container__spinner}>
                    <span className={styles.loader}></span>
                </div>
                    ) : (
                        <div>
                            {
                                recipes && <RecipeList recipes={recipes} />
                            }
                        </div>
                )}
            </div>
    )
}
