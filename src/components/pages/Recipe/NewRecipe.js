import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from './NewRecipe.module.scss';
import {supabase} from "../../../auth/supabaseClient";
import {Button} from "../../Button";

export const NewRecipe = () => {
    const INIT_IMAGE = '/image/notFound.svg';
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [instructions, setInstructions] = useState('')
    const [extendedIngredients, setExtendedIngredients] = useState('')
    const [image, setImage] = useState(INIT_IMAGE)
    const navigate = useNavigate();
    const email = supabase.auth.user().email

    const handleSubmit = (event) => {
        event.preventDefault();
        const recipeDetail = {title, summary, image, extendedIngredients, instructions, email}

        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(recipeDetail)
        }).then(() => {
            navigate('/my_recipe');
        });
    }
    return (
        <div className={styles.newPostContainer}>
            <h3>New post</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Title</label>
                <div className={styles.input}>
                    <input
                        className={styles.start__app__input__effect}
                        type='text'
                        required
                        value={title}
                        placeholder='Enter the title of the dish'
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <span className={styles.start__app__input__focus__border}></span>
                </div>
                <label className={styles.labelek}>Image<span>available soon</span></label>
                <div className={styles.input}>
                    <input
                        className={styles.start__app__input__effect__v2}
                        type='text'
                        value={image}
                        disabled={true}
                        placeholder='Enter the url of the image (optional)'
                        onChange={(event) => setImage(event.target.value)}
                    />
                    <span className={styles.start__app__input__focus__border}></span>
                </div>
                <label>Description</label>
                <div className={styles.input}>
                    <input
                        className={styles.start__app__input__effect}
                        type='text'
                        required
                        value={summary}
                        placeholder='Enter a description of the dish'
                        onChange={(event) => setSummary(event.target.value)}
                    />
                    <span className={styles.start__app__input__focus__border}></span>
                </div>
                <label>Ingredients</label>
                <div className={styles.input}>
                    <input
                        className={styles.start__app__input__effect}
                        type='text'
                        required
                        value={extendedIngredients}
                        placeholder='List all ingredients, separating the names with a comma'
                        onChange={(event) => setExtendedIngredients(event.target.value.split(','))}
                    />
                    <span className={styles.start__app__input__focus__border}></span>
                </div>
                <label>Instruction</label>
                <div className={styles.input}>
                    <textarea
                        className={styles.start__app__input__effect}
                        placeholder='Write the instructions for preparing the meal.'
                        required
                        value={instructions}
                        onChange={(event) => setInstructions(event.target.value.replace(/\\\\n|\\n|\n/g, ''))}
                    ></textarea>
                </div>
                <Button text={'Add new recipe'} onClick={() => console.log('Recipe added!')}/>
            </form>
        </div>
    )
}
