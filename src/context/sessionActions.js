import axios from 'axios'
import { LOGIN, LOGIN_ERROR } from 'types/session/index';

export const login = async (user, dispatch) => {
    await axios
        .post(`${process.env.REACT_APP_URL_API}/login`, { user })
        .then(res => {
            localStorage.setItem('token', res.headers.authorization)
            dispatch({ type: LOGIN, user: res.data.member })
        })
        .catch(error => {
            dispatch({type: LOGIN_ERROR, errorLogin: error.response.data.error})
        });
}