import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import stylesSpinner from "../../../auth/Auth.module.scss";
import styles from './RecipeDetails.module.scss';

export default function BlogDetails() {
    const {id} = useParams();
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect( () => {
        fetch(`http://localhost:8000/recipes/` + id)
            .then(res => {
                if(!res.ok) {
                    throw Error('Nie można pobrać danych');
                }
                return res.json();
            })
            .then(data => {
                setLoading(false);
                setRecipes(data);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError(error.message)
            })
        }, [])

    return (
        <div>
            <div>
                { error && <div>{error}</div> }
                {loading ? (
                    <div className={stylesSpinner.container__spinner}>
                        <span className={stylesSpinner.loader}></span>
                    </div>
                ) : (
                    <div>
                        <h2>Recipe details - {id}</h2>
                        <h3>{recipes.title}</h3>
                        <div>
                            {
                                recipes.instruction.map((element, index) => {
                                    return <li key={index}>{element}</li>
                                })
                            }
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}


