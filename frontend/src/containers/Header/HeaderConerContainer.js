import React, { Component } from "react";
import HeaderRightConer from "components/Base/HeaderRightConer";
import { connect } from "react-redux";
import UserProfileContainer from "containers/Header/UserProfileContainer";
import LoginButton from "components/Base/LoginButton";

class HeaderConerContainer extends Component {
    
    userinfo = () => {
        const { isLoggedin } = this.props;

        if(!isLoggedin){
            return <LoginButton>로그인</LoginButton>
        }else {
            return <UserProfileContainer />
        }
    };

    render(){
        return (
            <div>
                <HeaderRightConer 
                userinfo = {this.userinfo()} />
            </div>
        );
    }
};

export default connect(
    (state) => ({
        isLoggedin: state.user.get('logged'),
        logininfo: state.user.get('loggedInfo')
    }),
    (dispatch) => ({

    })
)(HeaderConerContainer);