import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/default';
import styles from './Popular.module.scss';

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
        <div className={styles.popularContainer}>
            <h3>Popular recipe:</h3>
            <Splide options={{
                drag: 'free',
                type: 'loop',
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
                                <Card title={recipe.title} image={recipe.image}/>
                            </SplideSlide>
                        );
                    })
                }
            </Splide>
        </div>
    )
}