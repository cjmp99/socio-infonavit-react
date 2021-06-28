import axios from 'axios'
import { ADD_BENEVIT, GET_BENEVITS_USER, LIST_BENEVITS, LIST_WALLETS } from 'types/benevits/index';
const access_token = localStorage.getItem('token')

export const getWallets = async (dispatch) => {
    await axios
        .get(`${process.env.REACT_APP_URL_API}/member/wallets`, {
            headers: {
                'Authorization': `${access_token}`
            }
        })
        .then(res => {
            dispatch({ type: LIST_WALLETS, wallets: res.data })
        })
        .catch(error => {
            if (error.response !== undefined) {
                console.log(error.response);

            }
        });
}

export const getBenevits = async (dispatch) => {
    await axios
        .get(`${process.env.REACT_APP_URL_API}/member/landing_benevits`, {
            headers: {
                'Authorization': `${access_token}`
            }
        })
        .then(res => {
            dispatch({ type: LIST_BENEVITS,  benevits: res.data.locked })
        })
        .catch(error => {
            if (error.response !== undefined) {
                console.log(error.response);
            }
        });
}

export const changeBenevitToUnlocked = (benevit, dispatch) => {
    dispatch({
        type: ADD_BENEVIT,
        newBenevit: benevit
    })
}

export const getBenevitsUser = (id_benevit, dispatch) => {
    dispatch({
        type: GET_BENEVITS_USER,
        payload: id_benevit
    })
}