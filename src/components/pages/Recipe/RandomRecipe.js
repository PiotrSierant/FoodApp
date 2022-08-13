import React, { useState, useEffect } from "react";
import styles from './RandomRecipe.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils, faEarthEurope} from "@fortawesome/free-solid-svg-icons";
export const RandomRecipe = () => {
    const [randomRecipe, setRandomRecipe] = useState(null);
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(response => {
                const {recipes} = response
                const item = recipes[0]
                setRandomRecipe(item);
                console.log(item)
            })
            .catch(err => console.error(err))
    }, [])

    return <div className={styles.randomRecipeContainer}>
        {
            randomRecipe && (
                <div className={styles.randomRecipeBox}>
                    <h2>{randomRecipe.title}</h2>
                    {randomRecipe.dishTypes.length > 0 && (
                        <div>
                            <FontAwesomeIcon icon={faUtensils} className={styles.randomRecipeIcon} />
                            <span>Types:</span>
                        </div>
                    )}
                    <div className={styles.randomRecipeTypes}>
                        {
                        randomRecipe.dishTypes.map((element, index) => {
                            return (
                                <span key={index}>{element}</span>
                            )
                        })
                    }</div>
                    <div className={styles.randomRecipeDescription}>
                        <img className={styles.randomRecipeImg} src={randomRecipe.image} alt={randomRecipe.title}/>
                        <div className={styles.randomRecipeCuisinesContainer}>
                            {randomRecipe.cuisines.length > 0 &&
                                (
                                    <div>
                                        <FontAwesomeIcon icon={faEarthEurope} className={styles.randomRecipeIcon} />
                                        <span>Cuisines:</span>
                                    </div>
                                )}
                            <div className={styles.randomRecipeCuisines}>{
                                randomRecipe.cuisines.map((element, index) => {
                                    return <span key={index}>{element}</span>
                                })
                            }</div>
                        </div>
                        <div className={styles.randomRecipeDescription__recipe}>
                            <p>Follow the recipe below:</p>
                            <ol className={styles.randomRecipeList}>
                            {
                                randomRecipe.analyzedInstructions[0].steps.map((element,index) => {
                                    return <li key={index}>{element.step}</li>
                                })
                            }
                            </ol>
                            <button className={styles.randomRecipeButton}>Add recipe to my list</button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

