import React from 'react';
import {addPostActionCreator, newPostTextActionCreator} from "../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


// const PostsContainer = ()=>{
//
//     return(
//         <StoreContext.Consumer>
//             {
//                 (store)=> {
//                     let state = store.getState();
//                     let addPost =()=>{
//                         store.dispatch(addPostActionCreator());
//                     }
//                     let onPostChange = (text) =>{
//                         store.dispatch(newPostTextActionCreator(text));
//                     }
//                     return (<Posts addPost={addPost}
//                                updateNewPostText={onPostChange}
//                                postsData={state.profilePage.postsData}
//                                newPostText={state.profilePage.newPostText}/>)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state)=>{
    return{
        postsData:state.profilePage.postsData,
        newPostText:state.profilePage.newPostText,

    }
}
const mapDispatchToProps = (dispatch) => {


    return {

        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
        // updateNewPostText: (text) => {
        //     dispatch(newPostTextActionCreator(text));
        // },
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;