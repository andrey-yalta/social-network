import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import {unFollowText} from "../../redux/users-reducer";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";


let User = ({user,followingInProgress,unfollow,follow }) => {
    let u =user ;
    let linkImg = "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg";

    return <div>
       <div className={s.users} >
                <span>
                    <div>
                        <NavLink to={"/profile/" +u.id}>
                             <img className={s.users__img} src={u.photos.small != null ? u.photos.small : userPhoto}
                                  alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ?  <button disabled={followingInProgress.some(id=> id === u.id)} onClick={() => {

                                    unfollow(u.id);

                                    }}>UnFollow</button> :

                                <button  disabled={followingInProgress.some(id=> id === u.id)} onClick={() => {
                                   follow(u.id);
                                        }}> Follow</button>
                        }}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                </div>
            )
        }
    </div>
}
export default User;