import React, { Component } from "react";
import styles from "./InputWithLabel.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class InputWithLabel extends Component{

    render(){

        const { label, ...rest} = this.props;

        return (
            <div className = {cx("wrapper")}>
                <div className = {cx("label")}>
                    {label}
                </div>
                <div className = {cx("input")}>
                    <input {...rest}/>
                </div>
            </div>
        );
    }
};

export default InputWithLabel;