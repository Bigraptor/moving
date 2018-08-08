import React from "react";
import styles from "./LoginSection.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginSection = ({title, children}) => {
    return (
        <div className = {cx("wrapper")}>
            <div className = {cx("slogan")}>
                {title}
            </div>
            <div className = {cx("btn")}>
                {children}
            </div>
        </div>
    );
};

export default LoginSection;