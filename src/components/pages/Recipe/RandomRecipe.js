import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './RandomRecipe.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils, faEarthEurope} from "@fortawesome/free-solid-svg-icons";
import {supabase} from "../../../auth/supabaseClient";

export const RandomRecipe = () => {
    let INIT_INSTRUCTION = ['Brak danych'];
    const [randomRecipe, setRandomRecipe] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instruction, setInstruction] = useState(INIT_INSTRUCTION);
    const [types, setTypes] = useState('');
    const [cuisines, setCuisines] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const user = supabase.auth.user();
    const email = user.email;

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(response => {
                const {recipes} = response
                const item = recipes[0]
                setRandomRecipe(item);
                console.log(item)
                setTitle(item.title)
                setDescription(item.title)
                item.dishTypes.length > 0 ? setTypes(item.dishTypes.join()) : setTypes(['brak danych'])
                item.cuisines.length > 0 ? setCuisines(item.cuisines.join()) : setCuisines(['brak danych'])
                item.image.length > 0 ? setImage(item.image) : setImage('/image/notFound.svg')
                item.analyzedInstructions[0].steps.length > 0
                    ? ( item.analyzedInstructions[0].steps.map(element => {
                    return INIT_INSTRUCTION.push(element.step) } ) )
                    : setInstruction(INIT_INSTRUCTION)

            })
            .catch(() => console.error('Brak dostępnych zapytań do api'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleClick() {
        const recipe = {title, description, instruction, types, cuisines, image, email}
        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(recipe)
        }).then(() => {
            navigate('/my_recipe')
        });
    }
    return <div className={styles.randomRecipeContainer}>
        {
            randomRecipe ? (
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
                            { randomRecipe.analyzedInstructions[0] > 0
                                ? <span>Przepis nie zawiera instrukcji...</span>
                                : (
                                randomRecipe.analyzedInstructions[0].steps.map((element,index) => {
                                    return <li key={index}>{element.step}</li>
                                }))
                            }
                            </ol>
                            <button className={styles.randomRecipeButton} onClick={handleClick}>Add recipe to my list</button>
                        </div>
                    </div>
                </div>
            )
                : (
                    <h3>Api error, brak dostępnych zapytań!</h3>
                )
        }
    </div>
}