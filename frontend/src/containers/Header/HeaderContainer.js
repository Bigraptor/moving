import React, { Component } from "react";
import Header from "components/Base/Header";
import HeaderConerContainer from "./HeaderConerContainer";
import NavMenu from "components/Base/NavMenu";
import MenuItem from "components/Base/MenuItem";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as baseActions from "redux/modules/base";

class HeaderContainer extends Component{

    handleMobileInfo = () => {
        const { BaseActions } = this.props;
        BaseActions.mobileAsideVisibility(true);
    }

    render(){

        const { handleMobileInfo } = this;

        return (
            <div>
                <Header 
                right = {<HeaderConerContainer />}
                mobileInfo = {handleMobileInfo}
                >
                    <NavMenu>
                        <MenuItem>
                        영화
                        </MenuItem>
                    </NavMenu>
                    <NavMenu>
                        <MenuItem>
                        일일 박스오피스
                        </MenuItem>
                    </NavMenu>
                </Header>
            </div>
        );
    }
};

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(HeaderContainer);