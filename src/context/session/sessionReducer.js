import { LOGIN, LOGIN_ERROR, LOGOUT_SESSION } from "types/session/index";


export default function sessionReducer(state, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user,
                errorLogin: null,
                logout: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                errorLogin: action.errorLogin
            }
        case LOGOUT_SESSION:
            return{
                ...state,
                user: null,
                logout: true
            }
        default:
            return state;
    }
};
