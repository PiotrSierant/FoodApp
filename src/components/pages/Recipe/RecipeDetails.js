import React, {useEffect, useState} from "react";
import {useParams, useNavigate } from "react-router-dom";
import styles from './RecipeDetails.module.scss';
import {Spinner} from "../../Spinner";
import {RecipeFull} from "./ShowRecipe/RecipeFull";
import {RecipeError} from "./ShowRecipe/RecipeError";

export default function RecipeDetails() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect( () => {
        fetch(`http://localhost:8000/recipes/` + id)
            .then(res => {
                if(!res.ok) {
                    throw Error('Nie można pobrać danych');
                }
                return res.json();
            })
            .then(data => {
                setLoading(false);
                setRecipe(data);
                setError(null);
                })
            .catch(error => {
                setLoading(false);
                setError(error.message);
            })
        }, [id])

        function handleClick() {
            fetch(`http://localhost:8000/recipes/` + recipe.id, {
                method: 'DELETE'
            }).then(() => {
                navigate('/my_recipe')
            })
        }
    return (
        <div className={styles.RecipeDetailsContainer}>
            {error && console.log(error)}
            {loading ? <Spinner /> : (
                    <main>
                        {
                            recipe
                            ? <RecipeFull recipe={recipe} onClick={handleClick} button={true} />
                            : <RecipeError />
                        }
                    </main>
                )
            }
        </div>
    )
}


