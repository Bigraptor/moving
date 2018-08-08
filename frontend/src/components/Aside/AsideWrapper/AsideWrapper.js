import React, { Component } from "react";
import styles from "./AsideWrapper.scss";
import classNames from "classnames/bind";
import AsideContent from "components/Aside/AsideContent";
import LoginSection from "components/Aside/LoginSection";
import LoginButton from "components/Base/LoginButton";
import MenuSection from "components/Aside/MenuSection";
import AsideMenuItem from "components/Aside/AsideMenuItem";

import ProfileSection from "components/Aside/ProfileSection";
import onClickOutside from "react-onclickoutside";

const cx = classNames.bind(styles);

class AsideWrapper extends Component{

    handleClickOutside = () => {
        const {onHide, visible, accountvisible} = this.props;
        if(!visible && !accountvisible) return;
        onHide();
    };

    render(){

        const {isLogin, nickname, thumbnail, visible, accountvisible} = this.props;

        const notlogin = (
            <div>
                <LoginSection title = "세상의 모든 영화 Mobig" >
                    <LoginButton>로그인</LoginButton>
                </LoginSection>
                <MenuSection>
                    <AsideMenuItem to = "">영화</AsideMenuItem>
                    <AsideMenuItem to = "">일일 박스오피스</AsideMenuItem>
                </MenuSection>
            </div>
        );
        
        const login = (nickname, thumbnail) => (
            <div>
                <ProfileSection nickname={nickname} thumbnail = {thumbnail} />
                <MenuSection>
                    <AsideMenuItem to = "">▶영화</AsideMenuItem>
                    <AsideMenuItem to = "">▶일일 박스오피스</AsideMenuItem>
                    <AsideMenuItem to = "">내 정보</AsideMenuItem>
                    <AsideMenuItem to = "">로그아웃</AsideMenuItem>
                </MenuSection>
            </div>
        );

        return(
        <div className = {cx("wrapper", {
            closed : !visible && !accountvisible
        })}>
            <AsideContent>
                {isLogin ? login(nickname, thumbnail) : notlogin}
            </AsideContent>
        </div>
        );
    };
};

export default onClickOutside(AsideWrapper);