import React from "react";
import styles from "./AuthButton.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AuthButton = ({children, click}) => {
    return (
        <div className = {cx("wrapper")} onClick = {click}>
            {children}
        </div>
    );
};

export default AuthButton;