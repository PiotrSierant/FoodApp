import React, { useEffect, useState } from "react";
import CardPopular from "./CardPopular";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/default';
import styles from './Popular.module.scss';
import {Link} from "react-router-dom";

export default function Popular() {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        PopularRecipe();
    }, [])

    const PopularRecipe = async () => {
        const checkLocalStorage = localStorage.getItem("popular")

        if (checkLocalStorage) {
            setPopular(JSON.parse(checkLocalStorage));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
            );
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
    }

    return (
        <section className={styles.popularContainer}>
            <h2>Popular recipe:</h2>
            <Splide options={{
                perPage: 3,
                drag: 'free',
                arrows: false,
                pagination: false,
                gap: '4rem',
                width: '1366px',
                autoWidth: true,
                focus: 'center',
            }}>
                {
                    popular.map(recipe => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Link to={`/recipe/${recipe.id}`} state={{recipe}} className={styles.PopularLink}>
                                    <CardPopular title={recipe.title} image={recipe.image}/>
                                </Link>
                            </SplideSlide>
                        );
                    })
                }
            </Splide>
        </section>
    )
}