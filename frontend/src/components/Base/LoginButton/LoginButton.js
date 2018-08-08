import React from "react";
import styles from "./LoginButton.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const LoginButton = ({children}) => {
    return(
        <div className = {cx('wrapper')}>
            <Link to = '/auth' className = {cx('link')}>
                {children}
            </Link>
        </div>
    );
};

export default LoginButton;