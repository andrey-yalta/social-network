import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
let link = "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg";
const Message = (props)=>{

        if(props.source ===1){
            return(

            <div className={s.message_from}>  <img className={s.person} src={link} alt="person"/> {props.msg}</div>
            )
        }
        else{
            return(
        <div className={s.message_to}>   {props.msg} <img className={s.person} src={link} alt="person"/></div>
                )
            }


}
export default Message