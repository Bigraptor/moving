import React from "react";
import styles from "./BestSellerWrapper.scss";
import classNames from "classnames/bind";
import BestSellerContainer from "containers/Home/BestSellerContainer";

const cx = classNames.bind(styles);

const BestSellerWrapper = () => {
    return (
        <div className = {cx("wrapper")}>
            <div className = {cx("title")}>
                국내도서 베스트셀러
            </div>
            <div className = {cx("article")}>
                <BestSellerContainer />
            </div>
        </div>
    );
};

export default BestSellerWrapper;