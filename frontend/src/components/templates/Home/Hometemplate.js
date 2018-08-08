import React from "react";
import styles from "./Hometemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Hometemplate = ({header, aside, children}) => {
    return (
        <div className = {cx("wrapper")}>
            <header>
                {header}
            </header>
            <aside>
                {aside}
            </aside>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Hometemplate;