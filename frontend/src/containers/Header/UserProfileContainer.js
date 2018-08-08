import React, { Component } from "react";
import UserProfile from "components/Base/UserProfile";
import * as baseActions from "redux/modules/base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class UserProfileContainer extends Component{

    handleShowInfo = () => {
        const { BaseActions } = this.props;
        BaseActions.accountInfoVisibility(true);
    }


    render() {

        const { nickname, thumbnail } = this.props.loginInfo.toJS();
        const { handleShowInfo } = this;

        return (
            <div>
                <UserProfile 
                nickname = {nickname}
                thumbnail = {thumbnail}
                click = {handleShowInfo}
                onHide
                />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        loginInfo: state.user.get('loggedInfo')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(UserProfileContainer);