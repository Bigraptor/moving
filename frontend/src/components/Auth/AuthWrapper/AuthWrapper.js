import React from "react";
import styles from "./AuthWrapper.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const AuthWrapper = ({children}) => {
    return (
        <div className = {cx("wrapper")}>
            <div className = {cx("shadow-box")}>
                <div className = {cx("logo-wrapper")}>
                    <Link to = "/" className = {cx("logo")}>
                        Mobig
                    </Link>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthWrapper;