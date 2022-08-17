import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from './NewRecipe.module.scss';
import {supabase} from "../../../auth/supabaseClient";
import {Button} from "../../Button";

export const NewRecipe = () => {
    const INIT_IMAGE = '/image/notFound.svg';
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [instruction, setInstruction] = useState('')
    const [types, setTypes] = useState('')
    const [cuisines, setCuisines] = useState('')
    const [image, setImage] = useState(INIT_IMAGE)
    const navigate = useNavigate();
    const user = supabase.auth.user()
    const email = user.email

    const handleSubmit = (event) => {
        event.preventDefault();
        const recipe = {title, description, instruction, types, cuisines, image, email}

        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(recipe)
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
                        placeholder='Podaj tytuł potrawy'
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
                        placeholder='Podaj adres url obrazu(optional)'
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
                        value={description}
                        placeholder='Podaj opis potrawy'
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <span className={styles.start__app__input__focus__border}></span>
                </div>
                <label>Types</label>
                <div className={styles.input}>
                    <input
                        className={styles.start__app__input__effect}
                        type='text'
                        required
                        value={types}
                        placeholder='Wymień wszystkie typy oddzielając nazwy przecinkiem'
                        onChange={(event) => setTypes(event.target.value)}
                    />
                    <span className={styles.start__app__input__focus__border}></span>
                </div>
                <label>Cuisines</label>
                <div className={styles.input}>
                    <input
                        className={styles.start__app__input__effect}
                        type='text'
                        required
                        value={cuisines}
                        placeholder='Wymień wszystkie kuchnie oddzielając nazwy przecinkiem'
                        onChange={(event) => setCuisines(event.target.value)}
                    />
                    <span className={styles.start__app__input__focus__border}></span>
                </div>
                <label>Instruction</label>
                <div className={styles.input}>
                    <textarea
                        className={styles.start__app__input__effect}
                        placeholder='Wymień wszystkie instrukcje przygotowania posiłku oddzielając je przecinkiem'
                        required
                        value={instruction}
                        onChange={(event) => setInstruction(event.target.value.split(','))}
                    ></textarea>
                </div>
                <Button text={'Add new recipe'} onClick={() => console.log('Przepis dodany!')}/>
            </form>
        </div>
    )
}
