import React from "react";
import styles from "./HeaderRightConer.scss";
import classNames from "classnames/bind";

const cx= classNames.bind(styles);

const HeaderRightConer = ({userinfo}) => {
    return (
        <div className = {cx("wrapper")}>
            {userinfo}
        </div>
    );
};

export default HeaderRightConer;