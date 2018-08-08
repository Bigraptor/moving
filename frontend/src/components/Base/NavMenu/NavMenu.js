import React from "react";
import styles from "./NavMenu.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavMenu = ({children}) => {
    return (
        <div className = {cx("wrapper")}>
            {children}
        </div>
    );
};

export default NavMenu;