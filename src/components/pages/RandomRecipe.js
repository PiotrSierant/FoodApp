import React, { useState, useEffect } from "react";
import styles from './RandomRecipe.module.scss';

export const RandomRecipe = () => {
    const [randomRecipe, setRandomRecipe] = useState(null);
    useEffect(() => {
        fetch('https://api.spoonacular.com/recipes/random?apiKey=240a132031054a54a08a31900bab692f')
            .then(response => response.json())
            .then(response => {
                const {recipes} = response
                const item = recipes[0]
                setRandomRecipe(item);
            })
            .catch(err => console.error(err))
    }, [])

    return <div className={styles.randomRecipeContainer}>
        {
            randomRecipe && (
                <div className={styles.randomRecipeBox}>
                    <h2>{randomRecipe.title}</h2>
                    <div className={styles.randomRecipeDescription}>
                        <img src={randomRecipe.image} alt={randomRecipe.title}/>
                        <div className={styles.randomRecipeDescription__recipe}>
                            <p>Follow the recipe below:</p>
                            {
                                randomRecipe.analyzedInstructions[0].steps.map((element,index) => {
                                    return <li key={index}>{element.step}</li>
                                })
                            }
                            <p>Health score: {randomRecipe.healthScore}</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

