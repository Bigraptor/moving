import React from "react";
import styles from "./AuthError.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AuthError = ( {children} ) => {
    return (
        <div className = {cx("wrapper")}>
            {children}
        </div>
    );
};

export default AuthError;