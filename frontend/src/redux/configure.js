import modules from "./modules";
import penderMiddleware from "redux-pender";
import { createStore, applyMiddleware } from "redux";

const configure = () => {
    const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(modules, dev, applyMiddleware(penderMiddleware()));

    return store;
};

export default configure;