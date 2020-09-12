// import React from 'react';
// import s from "./Users.module.css";
// import userPhoto from "../../assets/img/user.png";
// import {NavLink} from "react-router-dom";
// import {unFollowText} from "../../redux/users-reducer";
// import * as axios from "axios";
// import {usersAPI} from "../../api/api";
// import Paginator from "../common/Paginator/Paginator";
//
//
// let Users = (props) => {
//     let linkImg = "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg";
//     // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
//     // let pages = [];
//     // for (let i = 1; i <= pagesCount; i++) {
//     //     pages.push(i)
//     // }
//     return <div>
//         <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
//                    totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
//
//         {
//             props.users.map(u => <div className={s.users} key={u.id}>
//                 <span>
//                     <div>
//                         <NavLink to={"/profile/" +u.id}>
//                              <img className={s.users__img} src={u.photos.small != null ? u.photos.small : userPhoto}
//                                   alt=""/>
//                         </NavLink>
//                     </div>
//                     <div>
//                         {
//                             u.followed
//                                 ?  <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
//
//                                     props.unfollow(u.id);
//
//                                     }}>UnFollow</button> :
//
//                                 <button  disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
//                                     props.follow(u.id);
//                                         }}> Follow</button>
//                         }}
//                     </div>
//                 </span>
//                     <span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{"u.location.city"}</div>
//                         <div>{"u.location.country"}</div>
//                     </span>
//                 </span>
//                 </div>
//             )
//         }
//     </div>
// }
// export default Users;
import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import {unFollowText} from "../../redux/users-reducer";
import * as axios from "axios";
import {usersAPI} from "../../api/api";


import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = (props) => {
    let linkImg = "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg";
    return (<div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
        <div>
            {
                props.users.map(u => <User user={u}
                                           key={u.id}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}/>)
            }
        </div>
    </div>)
}


export default Users;



