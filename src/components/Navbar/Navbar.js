import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { MenuList } from "./MenuList";
import styles from './Navbar.module.scss';
import {supabase} from "../../auth/supabaseClient";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
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

    useEffect(() => {
        setIsOpen(!isOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

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
