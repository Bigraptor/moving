import React, { Component } from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";

import store from "./redux";
import { Provider } from "react-redux";

class Root extends Component{
    render(){

        return (
            <Provider store = {store}>
                <BrowserRouter>
                    <Route path = "/" component = {App} />
                </BrowserRouter>
            </Provider>
        );
    };
};

export default Root;