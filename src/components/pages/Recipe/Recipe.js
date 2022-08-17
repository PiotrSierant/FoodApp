import React  from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import styles from './Recipe.module.scss';
import {supabase} from "../../../auth/supabaseClient";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../../Button";
export default function Recipe() {
    const location = useLocation()
    const { recipe } = location.state
    const title = recipe.title;
    const description = recipe.title;
    const instruction = recipe.analyzedInstructions[0].steps.map((element) => {
        return element.step
    })
    let types = recipe.dishTypes
    let cuisines = recipe.cuisines
    const image = recipe.image
    const navigate = useNavigate();
    const user = supabase.auth.user()
    const email = user.email
    function handleClick() {
        types = types.join();
        cuisines = cuisines.join();
        const recipe = {title, description, instruction, types, cuisines, image, email}
        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(recipe)
        }).then(() => {
            navigate('/my_recipe')
        });
    }
    return (
        <div className={styles.RecipeContainer}>
            <div className={styles.RecipeContainerBox}>
                <h3>{recipe.title}</h3>
                { types.length > 0 && (
                    <div>
                        <FontAwesomeIcon icon={faUtensils} className={styles.RecipeIcon} />
                        <span>Types:</span>
                    </div>)}
                <div className={styles.RecipeTypes}>
                    { types.length > 0 && (
                        types.map((element, index) => {
                            return <span key={index}>{element}</span>
                        }))
                    }
                </div>
                <img src={recipe.image} className={styles.RecipeImg} alt={recipe.title}/>
                { cuisines.length > 0 && (
                    <div>
                        <FontAwesomeIcon icon={faUtensils} className={styles.RecipeIcon} />
                        <span>Cuisines:</span>
                    </div>)}
                <div className={styles.RecipeTypes}>
                    { cuisines.length > 0 && (
                        cuisines.map((element, index) => {
                            return <span key={index}>{element}</span>
                        }))
                    }
                </div>

                <p>Follow the recipe below:</p>
                <ol className={styles.RecipeList}>
                    {
                        instruction.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ol>
                <Button text={'Add to my list!'} onClick={handleClick} />
            </div>
        </div>
    )
}