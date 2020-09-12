import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps =(state)=>{
    return{
    messagePage:state.dialogsPage,
    // isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        // updateNewMessageBody: (body)=>{
        //     dispatch(updateNewMessageBodyActionCreator(body));
        // },
        sendMessage: (newMessageBody)=>{
            dispatch(sendMessageActionCreator(newMessageBody));
        },
    }
}


export  default compose(connect(mapStateToProps, mapDispatchToProps),WithAuthRedirect)(Dialogs);