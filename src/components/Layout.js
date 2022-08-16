import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import {Home} from "./pages/Home/Home";
import {NewRecipe} from "./pages/Recipe/NewRecipe";
import {MyRecipe} from "./pages/Recipe/MyRecipe";
import {RandomRecipe} from "./pages/Recipe/RandomRecipe";
import RecipeDetails from "./pages/Recipe/RecipeDetails";
import {About} from "./pages/About";
import styles from './Layout.module.scss';
import Recipe from "./pages/Recipe/Recipe";

export default function Layout({session}) {
    return (
        <div className={styles.container}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipe/*">
                        <Route path=':id' element={<Recipe />} />
                    </Route>
                    <Route path='/add_recipe' element={<NewRecipe />} />
                    <Route path='/my_recipe' element={<MyRecipe />} />
                    <Route path='/my_recipe/*'>
                        <Route path=':id' element={<RecipeDetails />} />
                    </Route>
                    <Route path='/random_recipe' element={<RandomRecipe />} />
                    <Route path='/about' element={<About key={session.user.id} session={session}/>} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}