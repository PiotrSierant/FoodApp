import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/default';
import styles from './OurChoice.module.scss';
import CardOurChoice from "./CardOurChoice";
import {Link} from "react-router-dom";

export default function OurChoice() {
    const [OurChoice, setOurChoice] = useState([])

    useEffect(() => {
        OurChoiceRecipe();
    }, [])

    const OurChoiceRecipe = async () => {
        const checkLocalStorage = localStorage.getItem("ourChoice")

        if (checkLocalStorage) {
            setOurChoice(JSON.parse(checkLocalStorage));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`
            );
            const data = await api.json();
            localStorage.setItem('ourChoice', JSON.stringify(data.recipes))
            setOurChoice(data.recipes)
        }
    }
    return (
        <section className={styles.ourChoiceContainer}>
            <h2>Our choice recipe:</h2>
            <Splide options={{
                perPage: 5,
                drag: 'free',
                arrows: false,
                pagination: false,
                gap: '4rem',
                width: '1366px',
                autoWidth: true,
                focus: 'center',
            }}>
                {
                    OurChoice.map(recipe => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Link to={`/recipe/${recipe.id}`} state={{recipe}} className={styles.OurChoiceLink}>
                                    <CardOurChoice title={recipe.title} image={recipe.image}/>
                                </Link>
                            </SplideSlide>
                        );
                    })
                }
            </Splide>
        </section>
    )
}