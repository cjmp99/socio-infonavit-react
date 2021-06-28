import React, { useReducer } from "react";
import SessionContext from "./sessionContext";
import sessionReducer from "./sessionReducer";

const SessionState = (props) => {
    const initialState = {
        user: null,
        loading: false,
        errorLogin: null
    };

    const [state, dispatch] = useReducer(sessionReducer, initialState);

    return (
        <SessionContext.Provider
            value={{
                state: state,
                dispatch: dispatch
            }}
        >
            {props.children}
        </SessionContext.Provider>
    );
};

export default SessionState;
