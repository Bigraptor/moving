import React, { Component } from "react";
import AsideWrapper from "components/Aside/AsideWrapper";

import { connect } from "react-redux";
import * as baseActions from "redux/modules/base";
import { bindActionCreators } from "redux";

class AsideContainer extends Component{

    handleHide = () => {
        const { BaseActions } = this.props;
        BaseActions.mobileAsideVisibility(false);
        BaseActions.accountInfoVisibility(false);
    };

    render() {

        const {handleHide} = this;
        const {mobileVisibility, isLogin, loggedInfo, accountVisibility} = this.props;
        const {nickname, thumbnail} = loggedInfo.toJS();

        return (
            <div>
                <AsideWrapper isLogin = {isLogin}
                nickname = {nickname}
                thumbnail = {thumbnail}
                onHide = {handleHide}
                visible = {mobileVisibility}
                accountvisible = {accountVisibility} />
            </div>
        );
    };
};

export default connect(
    (state) => ({
        mobileVisibility: state.base.getIn(['mobileAside', 'visibility']),
        accountVisibility: state.base.getIn(['accountInfo', 'visibility']),
        isLogin : state.user.get('logged'),
        loggedInfo: state.user.get('loggedInfo')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(AsideContainer);