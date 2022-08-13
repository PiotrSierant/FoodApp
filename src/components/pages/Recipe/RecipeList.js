import React from "react";
import {Link} from "react-router-dom";

export default function RecipeList({recipes}) {
    return (
        <div>
            <h2>Moje przepisy</h2>
            {
                recipes.map((recipe) => (
                    <Link to={`/my_recipe/${recipe.id}`} key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.desc}</p>
                    </Link>
                ))
            }
        </div>
    )
}