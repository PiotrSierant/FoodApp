import React from "react";
import styles from './Recipe.module.scss';
import {RecipeTitle} from "./RecipeTitle";
import {RecipeIngredients} from "./RecipeIngredients";
import {RecipeImage} from "./RecipeImage";
import {RecipeSummary} from "./RecipeSummary";
import {RecipeInstruction} from "./RecipeInstruction";
import {Button, DeleteButton} from "../../../Button";

export function RecipeFull({recipe, onClick, button}) {
    return <article className={styles.RecipeBox}>
                <RecipeTitle recipe={recipe.title} />
                <RecipeSummary recipe={recipe.summary} />
                <RecipeImage recipe={recipe.image} alt={recipe.title}/>
                <RecipeIngredients recipe={recipe.extendedIngredients} />
                <RecipeInstruction recipe={recipe.instructions} />
                {
                   button
                   ? <DeleteButton text={'Delete recipe!'} onClick={onClick} />
                   : <Button text={'Add recipe to my list'} onClick={onClick}/>
                }
            </article>
}