import React from "react";
import styles from "./ProfileSection.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ProfileSection = ({nickname, thumbnail}) => {
    return(
        <div className = {cx("wrapper")}>
            <div className = {cx("thumbnail")}>
                <img src = {thumbnail} alt = "Profile_Thumbnail" />
            </div>
            <div className = {cx("username")}>
                @{nickname}
            </div>
        </div>
    );
};

export default ProfileSection;