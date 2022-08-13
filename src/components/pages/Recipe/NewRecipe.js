import React, {useState} from "react";

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
        <div>
            <h2>New post</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type='text'
                    required
                    value={title}
                    placeholder='Podaj tytuł'
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Description</label>
                <input
                    type='text'
                    required
                    value={description}
                    placeholder='Podaj tytuł'
                    onChange={(event) => setDescription(event.target.value)}
                />
                <label>Types</label>
                <input
                    type='text'
                    required
                    value={types}
                    placeholder='Wymień wszystkie typy oddzielając nazwy przecinkiem'
                    onChange={(event) => setTypes(event.target.value)}
                />
                <label>Cuisines</label>
                <input
                    type='text'
                    required
                    value={cuisines}
                    placeholder='Wymień wszystkie kuchnie oddzielając nazwy przecinkiem'
                    onChange={(event) => setCuisines(event.target.value)}
                />
                <label>Instruction</label>
                <textarea
                    required
                    value={instruction}
                    onChange={(event) => setInstruction(event.target.value)}
                ></textarea>
                <button>Dodaj przepis</button>
            </form>
        </div>
    )
}
