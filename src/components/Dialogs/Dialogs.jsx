import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength30Creator, required} from "../../utils/validators/validators";

const Dialogs = (props)=>{
    // let messagePage = props.messagePage;

    let dialogs = props.messagePage.messageData.map(p=> <Message msg={p.message} key={p.id} source={p.num}/>)
    let users = props.messagePage.usersData.map(p=><DialogItem name={p.name} id={p.id} key={p.id} img={p.img}/>)
    let newMessageBody = props.messagePage.newMessageBody;
    let newMessageElement = React.createRef();

    // let addMessage =()=>{
    //     props.sendMessage();
    // }
    // let onNewMessageChange = (e)=>{
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // }
    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody);
    }
    if (!props.isAuth ) return <Redirect to={"/login"}/>

    return(
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {users}
                </div>
                <div className={s.dialogsMessage}>
                    {dialogs}
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
    )
}
const maxLength = maxLength30Creator(100);
const AddMessageForm = (props) =>{
    return(
        <form  onSubmit={props.handleSubmit} className={s.dialogsMessage_area}>
        <div>
            <Field component={Textarea} validate={[required, maxLength]} name={"newMessageBody"} placeholder={"Enter your message"}/>
            {/*<textarea placeholder={"Enter Your message"} value={newMessageBody} onChange={onNewMessageChange} ref={newMessageElement}/>*/}
        </div>
        <div>
            <button>Send Message</button>
        </div>
    </form>)
}
const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);
export  default Dialogs;