import React from "react";
import styles from "./Header.scss";
import classNames from "classnames/bind";
import account from "redux/modules/account";

const cx = classNames.bind(styles);

const Header = ({right, children, mobileInfo}) => {
    return (
        <div className = {cx("wrapper")}>
            <div className = {cx("logo-wrapper")}>
                <div className = {cx("logo")}>
                    Mobig
                </div>
            </div>
            <div className = {cx("menu")}>
                {children}
            </div>
            <div className = {cx("right-coner")}>
                <div className = {cx("desktop")}>
                    {right}
                </div>
                <div className = {cx("mobile")}>
                    <i className = "fas fa-bars" onClick = {mobileInfo} />
                </div>
            </div>
        </div>
    );
};

export default Header;