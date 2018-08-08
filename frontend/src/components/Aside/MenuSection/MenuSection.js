import React from "react";
import styles from "./MenuSection.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MenuSection = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default MenuSection;