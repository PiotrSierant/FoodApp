import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import styles from './Navbar.module.scss';
import {supabase} from "../../auth/supabaseClient";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuList = MenuList.map(({url, title, id}) => {
        return (
            <NavLink key={id} to={url}>
                <li>
                    {title}
                </li>
            </NavLink>
        )
    })
    const handleClickMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={styles.navContainer}>
            <nav>
                <a href={'/'} className={styles.logo}>
                    <FontAwesomeIcon icon={faPepperHot} className={styles.colorLogo} />
                    FoodApp
                </a>
                <div className={styles.menu_icon} onClick={handleClickMenu}>
                    {isOpen
                        ? <FontAwesomeIcon icon={faClose} />
                        : <FontAwesomeIcon icon={faBars} />
                    }
                </div>
                <ul className={ isOpen
                    ? `${styles.menu}`
                    : `${styles.close}`
                }>
                    {menuList}
                    <NavLink to={'/'} onClick={() => supabase.auth.signOut()}><li>
                        Wyloguj
                    </li></NavLink>
                </ul>
            </nav>
        </div>
    )
}
