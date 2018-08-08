import React from "react";
import styles from "./AsideMenuItem.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AsideMenuItem = ({children}) => {
    return (
        <div className = {cx("wrapper")}>
            {children}
        </div>
    );
};

export default AsideMenuItem;