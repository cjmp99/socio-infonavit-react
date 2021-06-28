import { LOGIN, LOGIN_ERROR } from "types/session/index";


export default function sessionReducer(state, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user,
                errorLogin: null
            }
        case LOGIN_ERROR:
            return {
                ...state,
                errorLogin: action.errorLogin
            }
        default:
            return state;
    }
};
