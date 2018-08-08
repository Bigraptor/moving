import account from "./account";
import user from "./user";
import base from "./base";
import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";

export default combineReducers({
    account,
    user,
    base,
    pender: penderReducer
});