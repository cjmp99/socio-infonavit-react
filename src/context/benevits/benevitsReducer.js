import { ADD_BENEVIT, GET_BENEVITS_USER, LIST_BENEVITS, LIST_WALLETS, RESET_STATE_BENEVITS } from "types/benevits/index";

export default function benevitsReducer(state, action) {
    switch (action.type) {
        case LIST_WALLETS:
            return {
                ...state,
                wallets: action.wallets
            }
        case LIST_BENEVITS:
            return {
                ...state,
                benevits: action.benevits,
            }
        case ADD_BENEVIT:
            return {
                ...state,
                benevits: state.benevits.filter(benevit => benevit !== action.newBenevit),
                unlocked: [...state.unlocked, action.newBenevit],
                newBenevit: action.newBenevit
            }
        case GET_BENEVITS_USER:
            return {
                ...state,
                benevitsUser: state.unlocked.filter(benevit => benevit.wallet.id === action.payload)
            }
        case RESET_STATE_BENEVITS:
            return {
                ...state,
                benevitsUser: []
            }
        default:
            return state;
    }
};