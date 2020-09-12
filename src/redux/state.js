import React from 'react';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store ={
     _callSubscriber(){
        console.log(" state was changed")
    },
    _appState :{

        profilePage:{
            postsData: [
                {id:1,text: "Hello", like:12},
                {id:2,text: "How are you, man?",like:11},
                {id:3,text: "What interestind in your life?",like:1},
                {id:4,text: "I'm glad to hear you!",like: 5}],
            newPostText:"it-camasutra.com"

        },
        dialogsPage:{
            usersData : [
                {id:1,name: "Andrey", img: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg"},
                {id:2,name: "Alexandr", img:"https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art.png"},
                {id:3,name: "Darya", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzWBXtpWI3XwVykdZn77ybq7FPMu8BVLP-JA&usqp=CAU"},
                {id:4,name: "Ivan", img:"https://cdn.imgbin.com/17/23/24/imgbin-computer-icons-teacher-pedagogy-education-experience-teacher-zdGVV5hRG7KR9fzeBqRr2SzmG.jpg"},],
            messageData : [
                {id:1,message: "Hello", num: 1},
                {id:2,message: "How are you, man?", num: 0},
                {id:3,message: "What interestind in your life?", num: 1},
                {id:4,message: "I'm glad to hear you!",num: 0},],
            newMessageBody:"",
        },



    },

    subscribe(observer){
        this._callSubscriber = observer;        // это короче паттерн обсерв. надо почитать!
    },
    getState(){
         return this._appState;
    },

    addPost() {
        let newPost ={
            id:5,text:this._appState.profilePage.newPostText, like:0
        };

        this._appState.profilePage.postsData.push(newPost);
        this._appState.profilePage.newPostText = "";
        this._callSubscriber(this._appState);
    },
    updatePostText(newText) {
        this._appState.profilePage.newPostText = newText;
        this._callSubscriber(this._appState);
    },
    dispatch(action){ //type:'ADD-POST'
        this._appState.profilePage = profileReducer(this._appState.profilePage, action);
        this._appState.dialogsPage = dialogsReducer(this._appState.dialogsPage, action);
        this._callSubscriber(this._appState)
    },


};
window.store = store;    //интересная вещь, возволяет просматривать элемент в консоле браузера
export default store;