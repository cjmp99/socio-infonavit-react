import benevitsContext from "context/benevits/benevitsContext";
import { useContext } from "react";

export const useBenevits = () => {
    const { state, dispatch } = useContext(benevitsContext);
    return [state, dispatch];
};
