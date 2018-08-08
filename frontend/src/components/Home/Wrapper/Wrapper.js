import React from "react";
import styles from "./Wrapper.scss";
import classNames from "classnames/bind";
import BestSellerWrapper from "components/Home/BestSellerWrapper";
import Content from "components/Home/Content";

const cx = classNames.bind(styles);

const Wrapper = () => {
    return (
        <div>
            <Content>
                <BestSellerWrapper />
            </Content>
        </div>
    );
};

export default Wrapper;