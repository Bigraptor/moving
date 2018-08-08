import React, { Component } from "react";
import styles from "./BestSeller.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class BestSeller extends Component{
    render(){

        const { author, cover, title, rank } = this.props;

        return (
            <div className = {cx("wrapper")}>
                <div className = {cx("cover")}>
                    <img src = {cover} alt = "cover" />
                </div>
                <div className = {cx("content")}>
                    <div className = {cx("title")}>{title}</div>
                    <div className = {cx("author")}>{author}</div>
                    <div className = {cx("rank")}>{rank}</div>
                </div>
            </div>
        );
    }
};

export default BestSeller;