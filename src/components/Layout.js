import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import {Home} from "./pages/Home/Home";
import {NewRecipe} from "./pages/NewRecipe";
import {MyRecipe} from "./pages/MyRecipe";
import {RandomRecipe} from "./pages/RandomRecipe";
import {About} from "./pages/About";
import styles from './Layout.module.scss';

export default function Layout({session}) {
    return (
        <div className={styles.container}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/add_recipe' element={<NewRecipe />} />
                    <Route path='/my_recipe' element={<MyRecipe />} />
                    <Route path='/random_recipe' element={<RandomRecipe />} />
                    <Route path='/about' element={<About key={session.user.id} session={session}/>} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}