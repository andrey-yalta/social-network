import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state)=>({
    isAuth: state.auth.isAuth,
});
export  const WithAuthRedirect = (Component)=>{
    class WithAuthRedirect extends React.Component {
        render() {

            return <Component {...this.props}/>

        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(WithAuthRedirect);
    return ConnectedAuthRedirectComponent;
}
