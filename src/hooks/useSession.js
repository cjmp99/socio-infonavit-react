import sessionContext from "context/sessionContext";
import { useContext } from "react";

export const useSession = () => {
    const { state, dispatch } = useContext(sessionContext);
    return [state, dispatch];
};
