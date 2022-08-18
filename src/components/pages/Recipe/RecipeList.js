import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from './RecipeList.module.scss';
import { supabase } from "../../../auth/supabaseClient";
import {Search} from "../../Search";

export default function RecipeList({recipes}) {
    const user = supabase.auth.user()
    const filteredList = recipes.filter(function (element) {
        return element.email === user.email
    });
    const [filtrData, setFiltrData] = useState([]);
    useEffect(() => {
        setFiltrData(filteredList)
    }, [])
    function searchFn(value) {
        const result = filteredList.filter((element) => {
            return element.title.toLowerCase().search(value) !== -1;
        })
        setFiltrData(result);
    }
    return (
        <section className={styles.recipeListContainer}>
            <section className={styles.recipeList}>
                <h2 className={styles.recipeListHead}>My recipes</h2>
                <Search search={searchFn} />
                    {
                        filtrData.map((recipe) => (
                            <Link
                                to={`/my_recipe/${recipe.id}`}
                                key={recipe.id}
                                className={styles.recipeLink}
                            >
                                <div className={styles.recipeContainer}>
                                    <h3>{recipe.title}</h3>
                                    <p dangerouslySetInnerHTML={{__html: recipe.summary }}></p>
                                </div>
                            </Link>
                        ))
                    }
            </section>
        </section>
    )
}