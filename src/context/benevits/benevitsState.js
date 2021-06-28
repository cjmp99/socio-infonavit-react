import React, { useReducer } from "react";
import BenevitsContext from "./benevitsContext";
import benevitsReducer from "./benevitsReducer";

const BenevitsState = (props) => {
    const initialState = {
        wallets: [],
        benevits: [],
        unlocked: [],
        newBenevit: null,
        benevitsUser: []
    };

    const [state, dispatch] = useReducer(benevitsReducer, initialState);

    return (
        <BenevitsContext.Provider
            value={{
                state: state,
                dispatch: dispatch
            }}
        >
            {props.children}
        </BenevitsContext.Provider>
    );
};

export default BenevitsState;