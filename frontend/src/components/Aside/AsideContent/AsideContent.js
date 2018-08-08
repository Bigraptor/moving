import React from "react";
import styles from "./AsideContent.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AsideContent = ({children}) => {
    return (
        <div className = {cx("wrapper")}>
            {children}
        </div>
    );
};

export default AsideContent;