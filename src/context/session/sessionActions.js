import axios from 'axios'
import { LOGIN, LOGIN_ERROR, LOGOUT_SESSION } from 'types/session/index';

export const login = async (user, dispatch) => {
    await axios
        .post(`${process.env.REACT_APP_URL_API}/login`, { user })
        .then(res => {
            localStorage.setItem('token', res.headers.authorization)
            dispatch({ type: LOGIN, user: res.data.member })
        })
        .catch(error => {
            if (error.response !== undefined) {
                dispatch({ type: LOGIN_ERROR, errorLogin: error.response.data.error })
            }
        });
}

export const logout = async (dispatch) => {
    await axios
        .delete(`${process.env.REACT_APP_URL_API}/logout`)
        .then(res => {
            if (res.status === 200) {
                dispatch({type: LOGOUT_SESSION})
            }
        })
        .catch(error => {
            console.log(error.response);
        });
}