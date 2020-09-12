import React from 'react';
import Post from "./Post/Post";
import s from "./Posts.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLength30Creator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";


const  Posts = React.memo(props =>{ // функция мемо нуэжна чтобы постоянно не перерндерить страницу, а проверять есть ли изменения в пропсах

    let newPostElement = React.createRef();

    let addPost =(values)=>{
        props.addPost(values.newPostText);
        debugger;
    }

    let posts = props.postsData.map(p =><Post  key={p.id} text={p.text} like={p.like}/>)
    return(
        <div className={s.stuff}>
            <h2>My posts</h2>
            <AddNewPostForm onSubmit={addPost}/>
            {posts}
        </div>
    )
});

const maxLength30 = maxLength30Creator(30);
let AddNewPostForm =(props)=>{
    return(<form onSubmit={props.handleSubmit}>
        <div>
            <Field  placeholder={"post message"} component={Textarea} name={"newPostText"  } validate={[required,maxLength30]}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>)
}
AddNewPostForm = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);
export default Posts