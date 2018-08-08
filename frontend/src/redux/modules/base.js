import { createAction, handleActions} from "redux-actions";
import { Map } from "immutable";

const ACCOUNTINFO_VISIBILITY = "base/ACCOUNTINFO_VISIBILITY";
const MOBILE_ASIDE_VISIBILITY = "base/MOBILE_ASIDE_VISIBILITY"

export const accountInfoVisibility = createAction(ACCOUNTINFO_VISIBILITY);
export const mobileAsideVisibility = createAction(MOBILE_ASIDE_VISIBILITY);

const initialState = Map({
    accountInfo: Map({
        visibility: false
    }),
    mobileAside: Map({
        visibility: false
    })
});

export default handleActions({
    [ACCOUNTINFO_VISIBILITY] : (state, action) => {
        return state.setIn(['accountInfo', 'visibility'], action.payload)
    },
    [MOBILE_ASIDE_VISIBILITY] : (state, action) => {
        return state.setIn(['mobileAside', 'visibility'], action.payload)
    }
}, initialState);