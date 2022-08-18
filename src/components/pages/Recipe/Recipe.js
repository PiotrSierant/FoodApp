import React  from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {supabase} from "../../../auth/supabaseClient";
import {RecipeFull} from "./ShowRecipe/RecipeFull";
import {RecipeError} from "./ShowRecipe/RecipeError";
import styles from './Recipe.module.scss';
export default function Recipe() {
    const location = useLocation()
    const {recipe} = location.state

    const title = recipe.title;
    const summary = recipe.summary;
    const image = recipe.image;
    const extendedIngredients = recipe.extendedIngredients;
    const instructions = recipe.instructions;

    const navigate = useNavigate();
    const email = supabase.auth.user().email

    function handleClick() {
        const recipeDetail = {title, summary, image, extendedIngredients, instructions, email}

        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(recipeDetail)
        }).then(() => {
            navigate('/my_recipe')
        });
    }

    return <main className={styles.container}>
        {
            recipe
                ? <RecipeFull recipe={recipe} onClick={handleClick}/>
                : <RecipeError/>
        }
    </main>
}