import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";
import { pender } from "redux-pender";
import * as AuthAPI from "lib/api/auth";

const CHANGE_INPUT = "account/CHANGE_INPUT";
const INITIALIZE_FORM = "account/INITIALIZE_FORM";
const REGISTER = "account/REGISTER";
const CHECK_ID_EXISTS = "account/CHECK_ID_EXISTS";
const CHECK_NICKNAME_EXISTS = "account/CHECK_NICKNAME_EXISTS";
const SET_ERROR = "account/SET_ERROR";
const LOGIN = "account/LOGIN";

export const changeInput = createAction(CHANGE_INPUT);
export const initializeForm = createAction(INITIALIZE_FORM);

export const checkIdExists = createAction(CHECK_ID_EXISTS, AuthAPI.checkIdExists);
export const checkNicknameExists = createAction(CHECK_NICKNAME_EXISTS, AuthAPI.checkNicknameExists);
export const register = createAction(REGISTER, AuthAPI.register);
export const setError = createAction(SET_ERROR);
export const login = createAction(LOGIN, AuthAPI.login);

const initialState = Map({
    join: Map({
        form: Map({
            id: '',
            nickname: '',
            pw: '',
            pwconfirm: ''
        }),
        exists: Map({
            id: false,
            nickname: false
        }),
        error: null
    }),
    login: Map({
        form: Map({
            id: '',
            pw: ''
        }),
        error: null
    }),
    result: Map({})
});

export default handleActions({
    [CHANGE_INPUT] : (state, action) => {
        const { form, name, value } = action.payload;
        return state.setIn([form, 'form', name], value);
    },
    [INITIALIZE_FORM] : (state, action) => {
        const initial = initialState.get(action.payload);
        return state.set(action.payload, initial);
    },
    [SET_ERROR] : (state, action) => {
        const { form, message} = action.payload;
        return state.setIn([form, 'error'], message);
    },
    ...pender({
        type: REGISTER,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
    ...pender({
        type: CHECK_ID_EXISTS,
        onSuccess: (state, action) => state.setIn(['join', 'exists', 'id'], action.payload.data.exist)
    }),
    ...pender({
        type: CHECK_NICKNAME_EXISTS,
        onSuccess: (state, action) => state.setIn(['join', 'exists', 'nickname'], action.payload.data.exists)
    }),
    ...pender({
        type: LOGIN,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    })
}, initialState);