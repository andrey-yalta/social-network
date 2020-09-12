import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers, getUsersThunkCreator,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching, unFollow,
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import circles from "./../../assets/img/circles.svg";
import Preloader from "../common/preloader/preloader";
import {usersAPI} from "../../api/api";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersState
} from "../../redux/users-selectors";



class UserAPIComponent extends React.Component{

    componentDidMount() {//данный метод вызывается по умолчанию когда jsx уже прогрузился (комопнента react.component
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
        //
        // this.props.toggleIsFetching(true); //эта херня нужная чтобы включать и выключать анимацию
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{ //WidthCredentials - это значит использовать Cookie от сайта или нет!!
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers( data.items)
        //     this.props.setTotalUsersCount( data.totalCount)
        // })
    }
    onPageChanged =(p) =>{
        this.props.getUsers(p,this.props.pageSize);
        // this.props.setCurrentPage(p);
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(p,this.props.pageSize).then(data =>{
        //     this.props.setUsers( data.items)
        //     this.props.toggleIsFetching(false);
        //
        // })

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   toggleFollowingProgress ={this.props.toggleFollowingProgress}
                   followingInProgress ={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return{

        users:getUsersState(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps,
    {follow,unFollow,
        toggleFollowingProgress, setCurrentPage,
         getUsers})( UserAPIComponent);