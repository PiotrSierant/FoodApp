import React from "react";
import styles from "../RandomRecipe.module.scss";
import {RecipeTitle} from "./RecipeTitle";
import {RecipeTypes} from "./RecipeTypes";
import {RecipeImage} from "./RecipeImage";
import {RecipeCuisines} from "./RecipeCuisines";
import {RecipeInstruction} from "./RecipeInstruction";
import {Button} from "../../../Button";

export function RecipeFull({recipe, onClick}) {
    return <div className={styles.recipeBox}>
                <RecipeTitle recipe={recipe.title} />
                <RecipeTypes recipe={recipe.dishTypes} />
                <RecipeImage recipe={recipe.image} alt={recipe.title}/>
                <RecipeCuisines recipe={recipe.cuisines} />
                <RecipeInstruction myRecipe={false} recipe={recipe.analyzedInstructions[0].steps} />
                <Button text={'Add recipe to my list'} onClick={onClick}/>
            </div>
}