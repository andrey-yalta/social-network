import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from 'react';
//test data
let state = {
    postsData: [
        {id: 1, text: "Hello", like: 12},
        {id: 2, text: "How are you, man?", like: 11},
        {id: 3, text: "What interestind in your life?", like: 1},
        {id: 4, text: "I'm glad to hear you!", like: 5}],

};

it("new post should be added", ()=>{
    let action = addPostActionCreator("it-camasutra");

    //action
    let newState = profileReducer(state,action);
    //expectation
    expect(newState.postsData.length).toBe(5);
})
it("new post should be with this text", ()=>{
    let action = addPostActionCreator("it-camasutra");

    //action
    let newState = profileReducer(state,action);
    //expectation
    expect(newState.postsData[4].text).toBe("it-camasutra");
})
it("new post should be added", ()=>{
    let action = addPostActionCreator("it-camasutra");

    //action
    let newState = profileReducer(state,action);
    //expectation
    expect(newState.postsData.length).toBe(4);
})