import React, {useState} from "react";

export const NewRecipe = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const recipe = {title, desc}

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
                <label>Recipe title</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Recipe desc</label>
                <textarea
                required
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
                ></textarea>
                <button>Dodaj przepis</button>
            </form>
        </div>
    )
}
