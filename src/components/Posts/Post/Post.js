import React from 'react';
import s from "./Post.module.css";
const Post = (props)=>{
    return(
        <div className={s.post}>
            <img src="https://sefon.pro/img/artist_photos/ava-max.jpg" alt=""/>
            <p>{props.text}</p>
            <label >like {props.like}</label>
        </div>
    )
}
export default Post;