import React from "react";
import styles from "./RightAlignLink.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const RightAlignLink = ({to, children}) => {
    return(
        <div className = {cx("wrapper")}>
            <Link to = {to} className = {cx("link")}>
                {children}
            </Link>
        </div>
    );
};

export default RightAlignLink;