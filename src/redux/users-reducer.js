import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SETUSERS="SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let link = "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg";
let initialState = {
    users: [
        // {id:1,photoUrl:link, name: "Dmitriy", status:"Hello world", location:{city:"Minsk", country:"Belarus"}, followed:true},
        // {id:2,photoUrl:link, name: "Ivan", status:"I am a boss", location:{city:"Moscow", country:"Russia"}, followed:false},
        // {id:3,photoUrl:link, name: "Tanya", status:"ha ha ha", location:{city:"Kiev", country:"Ucraine"}, followed:true},
    ],
    pageSize:5,
    totalUsersCount: 21,
    currentPage: 3,
    newPostText:"it-camasutra.com",
    isFetching:false,
    followingInProgress:[2,3],
};
const usersReducer =(state = initialState, action)=>{
    switch (action.type) {
        case FOLLOW:
            debugger;
            return {
                ...state,
                // users:updateObjectInArray(state.users,action.userId,"id",{followed: true})
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
                }

        case UNFOLLOW:

            return {
                ...state,
                // users:updateObjectInArray(state.users,action.userId,"id",{followed: false})
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SETUSERS:
            return {
                ...state,users: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,currentPage: action.p
            }
        case SET_TOTAL_USERS_COUNT:

            return {

                ...state, totalUsersCount:action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            // debugger;
            return {

              ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:{
            return state}
    }};

export const followSuccess =(userId) =>{
    return {type:"FOLLOW",userId}
};
export const unFollowSuccess = (userId) =>{
    return {type:'UNFOLLOW',userId}
};
export const setUsers = (users) =>{
    return {type:"SET-USERS",users}
};
export const setCurrentPage = (p) =>{
    return {type:"SET_CURRENT_PAGE", p}
};
export const setTotalUsersCount = (totalUsersCount) =>{
    return {type:"SET_TOTAL_USERS_COUNT", totalUsersCount}
};
export const toggleIsFetching = (isFetching) =>{
    return{type:"TOGGLE_IS_FETCHING", isFetching}
}
export const toggleFollowingProgress  = (isFetching, userId) =>{
    return{type:"TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId}
}

export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true)); //эта херня нужная чтобы включать и выключать анимацию
        dispatch(setCurrentPage(page)); // доделывали,надо разобрать

        let data = await usersAPI.getUsers(page, pageSize);
        //WidthCredentials - это значит использовать Cookie от сайта или нет!!
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
    }

export const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) =>{
    dispatch(toggleFollowingProgress(true, userId));
    debugger;
    let response = await apiMethod(userId);
    if (response.data.resultCode ===0){
        debugger;
        dispatch(actionCreator(userId));
    }
    debugger;
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow =(userId) =>{

    return async (dispatch) =>{
        followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess);
    }
}


export const unFollow =(userId) =>{
    return async (dispatch) =>{//это санка
        followUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(userId), unFollowSuccess);
    }
}


export default usersReducer;