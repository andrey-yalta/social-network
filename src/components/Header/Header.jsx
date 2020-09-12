import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className='header'>
        <img className={s.img} src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        <div className={s.login__block}>
            { props.isAuth?
                <div>{props.login} - <button onClick={props.logout}> LogOut</button> </div> : <NavLink to={"/login"}>
                Login
            </NavLink>}
            
        </div>
    </header>
}

export default Header;