import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
    postsData: [
        {id: 1, text: "Hello", like: 12},
        {id: 2, text: "How are you, man?", like: 11},
        {id: 3, text: "What interestind in your life?", like: 1},
        {id: 4, text: "I'm glad to hear you!", like: 5}],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, text: action.newPostText, like: 0
            };
            let newState = {...state, postsData: [...state.postsData]}; //поверхностная и глубокая копия
            newState.postsData.push(newPost);
            newState.newPostText = "";
            return newState
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos:action.photos}};
        }
        default: {
            return state
        }
    }
};

export const addPostActionCreator = (newPostText) => {
    return {type: "ADD-POST", newPostText}
};
export const setUserProfile = (profile) => {
    return {type: "SET_USER_PROFILE", profile};
};
export const setStatus = (status) => {
    return {type: "SET_STATUS", status};
};
export const savePhotoSuccess = (photos) => {
    return {type: "SAVE_PHOTO_SUCCESS", photos};
};

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
};
export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        alert("update status error" + error)
        //ЗДЕСЬ НАДО ЗАДИСПАТЧИТЬ ОШИБКУ
    }
};
export const savePhoto = (file)=> async(dispatch) =>{
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode ===0){
        dispatch(savePhotoSuccess(response.data.data.photos) )
    }
};

export const saveProfile = (profile)=> async(dispatch, getState) =>{
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode ===0){
        dispatch(getUserProfile(userId) )
    }
    else{
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }

};

export default profileReducer;