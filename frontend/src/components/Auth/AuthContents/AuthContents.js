import React from "react";
import styles from "./AuthContents.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AuthContent = ({title, children}) => {
    return (
        <div className = {cx("wrapper")}>
            <div className = {cx("title")}>
                {title}
            </div>
            <div className = {cx("contents")}>
                {children}
            </div>
        </div>
    );
};

export default AuthContent;