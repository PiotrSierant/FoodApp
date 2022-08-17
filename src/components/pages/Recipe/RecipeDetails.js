import React, {useEffect, useState} from "react";
import {useParams, useNavigate } from "react-router-dom";
import stylesSpinner from "../../../auth/Auth.module.scss";
import styles from './RecipeDetails.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarthEurope, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {DeleteButton} from "../../Button";

export default function BlogDetails() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [type, setType] = useState(['Brak danych']);
    const [cuisines, setCuisines] = useState(['Brak danych']);
    const navigate = useNavigate();

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
                setRecipe(data);
                setError(null);
                data.types.length > 0 && setType(data.types.split(','));
                data.cuisines.length > 0 && setCuisines(data.cuisines.split(','));
            })
            .catch(error => {
                setLoading(false);
                setError(error.message);
            })
        }, [id])
        function handleClick() {
            fetch(`http://localhost:8000/recipes/` + recipe.id, {
                method: 'DELETE'
            }).then(() => {
                navigate('/my_recipe')
            })
        }
    return (
        <div className={styles.RecipeDetailsContainer}>
            {error && console.log(error)}
            {loading ? (
                <div className={stylesSpinner.container__spinner}>
                    <span className={stylesSpinner.loader}></span>
                </div>
            ) : (
                <div className={styles.RecipeDetailsBox}>
                    <h2>{recipe.title}</h2>
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
                        <img className={styles.RecipeDetailsImg} src={recipe.image} alt={recipe.title}/>
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
                                    recipe.instruction.map((element, index) => {
                                        return <li key={index}>{element}</li>
                                    })
                                }
                            </ol>
                            <DeleteButton text={'Delete recipe!'} onClick={handleClick} />
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}


