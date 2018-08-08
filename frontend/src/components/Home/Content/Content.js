import React from "react";
import styles from "./Content.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Content = ({children}) => {
    return (
        <div className = {cx("wrapper")}>
            {children}
        </div>
    );
};

export default Content;