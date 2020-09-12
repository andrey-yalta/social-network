import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={"/login"} activeClassName={s.active}>Login</NavLink>
            </div>
            <div>
                <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={"/users"} activeClassName={s.active}>Users</NavLink>
            </div>
            <div>
                <NavLink to={"/news"} activeClassName={s.active}>News</NavLink>
            </div>
            <div>
                <NavLink to={"/music"} activeClassName={s.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to={"/settings"} activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.sitebar}>
                <h3>Friends</h3>
                <div className={s.sitebar__items}>
                    <div className={s.sitebar__item}>
                        <img src="https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" alt=""/>
                        <h4>Petya</h4>
                        <label htmlFor="">online</label>
                    </div>
                    <div className={s.sitebar__item}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzWBXtpWI3XwVykdZn77ybq7FPMu8BVLP-JA&usqp=CAU" alt=""/>
                        <h4>Sveta</h4>
                        <label htmlFor="">offline</label>
                    </div>
                    <div className={s.sitebar__item}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzWBXtpWI3XwVykdZn77ybq7FPMu8BVLP-JA&usqp=CAU" alt=""/>
                        <h4>Ivan</h4>
                        <label htmlFor="">online</label>
                    </div>
                </div>
            </div>
        </nav>)
}

export default Navbar;