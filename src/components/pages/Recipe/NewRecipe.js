import React, {useState} from "react";
import styles from './NewRecipe.module.scss';
export const NewRecipe = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [instruction, setInstruction] = useState('')
    const [types, setTypes] = useState('')
    const [cuisines, setCuisines] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const recipe = {title, description, instruction, types, cuisines}

        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(recipe)
        }).then(() => {
            console.log('new recipe added');
        });
    }
    return (
        <div className={styles.newPostContainer}>
            <h2>New post</h2>
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
                        onChange={(event) => setTypes(event.target.value.split(','))}
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
                        onChange={(event) => setCuisines(event.target.value.split(','))}
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
                <button className={styles.start__app__button}>Dodaj przepis</button>
            </form>
        </div>
    )
}
