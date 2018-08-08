import React from "react";
import styles from "./UserProfile.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const UserProfile = ( {nickname, thumbnail, click} ) => {
    return(
        <div className = {cx("wrapper")}>
            <span className = {cx("thumbnail")}>
                <img src = {thumbnail} alt = "thumbnail" />
            </span>
            <span className = {cx("nickname")} onClick = {click}>
                @{nickname}
            </span>
        </div>
    );
};

export default UserProfile;