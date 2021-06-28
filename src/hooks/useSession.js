import sessionContext from "context/session/sessionContext";
import { useContext } from "react";

export const useSession = () => {
    const { state, dispatch } = useContext(sessionContext);
    return [state, dispatch];
};
