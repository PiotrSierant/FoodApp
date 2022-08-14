import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import stylesSpinner from "../../../auth/Auth.module.scss";
import styles from './RecipeDetails.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarthEurope, faUtensils} from "@fortawesome/free-solid-svg-icons";

export default function BlogDetails() {
    const {id} = useParams();
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [type, setType] = useState([]);
    const [cuisines, setCuisines] = useState([]);

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
                data.types.length > 0 ? setType(data.types.split(',')) : setType(['Brak danych']);
                data.cuisines.length > 0 ? setCuisines(data.cuisines.split(',')) : setCuisines(['Brak danych']);
            })
            .catch(error => {
                setLoading(false);
                setError(error.message)
            })
        }, [id])
        function handleClick() {
            console.log('usuwam przepis')
        }
    return (
        <div className={styles.RecipeDetailsContainer}>
            { error && <div>{error}</div> }
            {loading ? (
                <div className={stylesSpinner.container__spinner}>
                    <span className={stylesSpinner.loader}></span>
                </div>
            ) : (
                <div className={styles.RecipeDetailsBox}>
                    <h2>{recipes.title}</h2>
                        <div>
                            <FontAwesomeIcon icon={faUtensils} className={styles.RecipeDetailsIcon} />
                            <span>Types:</span>
                        </div>
                    <div className={styles.RecipeDetailsTypes}>
                        {
                            type.map((element, index) => {
                                return <span key={index}>{element}</span>
                            })
                        }
                    </div>
                    <div className={styles.RecipeDetailsDescription}>
                        <img className={styles.RecipeDetailsImg} src={recipes.image} alt={recipes.title}/>
                        <div className={styles.RecipeDetailsCuisinesContainer}>
                            <div>
                                <FontAwesomeIcon icon={faEarthEurope} className={styles.RecipeDetailsIcon} />
                                <span>Cuisines:</span>
                            </div>
                        <div className={styles.RecipeDetailsCuisines}>{
                            cuisines.map((element, index) => {
                                return <span key={index}>{element}</span>
                            })
                        }</div>
                        </div>
                        <div className={styles.RecipeDetailsDescription__recipe}>
                            <p>Follow the recipe below:</p>
                            <ol className={styles.RecipeDetailsList}>
                                {
                                    recipes.instruction.map((element, index) => {
                                        return <li key={index}>{element}</li>
                                    })
                                }
                            </ol>
                            <button className={styles.RecipeDetailsButton} onClick={handleClick}>Delete recipe!</button>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}


