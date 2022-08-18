import React, { useState, useEffect } from "react";
import {supabase} from "../../../auth/supabaseClient";
import { useNavigate } from "react-router-dom";
import {RecipeError} from "./ShowRecipe/RecipeError";
import styles from './RandomRecipe.module.scss';
import {RecipeFull} from "./ShowRecipe/RecipeFull";

export const RandomRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const email = supabase.auth.user().email;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(response => {
                const {recipes} = response
                const item = recipes[0]
                setRecipe(item);
            })
            .catch(() => console.error('Brak dostępnych zapytań do api'))
    }, []);

    function addRecipe() {
        const title = recipe.title;
        const summary = recipe.summary;
        const image = recipe.image;
        const extendedIngredients = recipe.extendedIngredients;
        const instructions = recipe.instructions;
        const recipeDetail = {title, summary, image, extendedIngredients, instructions, email}
        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(recipeDetail)
        }).then(() => {
            navigate('/my_recipe')
        });
    }
    return <main className={styles.container}>
        {
            recipe
                ? <RecipeFull recipe={recipe} onClick={addRecipe} button={false} />
                : <RecipeError />
        }
    </main>
}