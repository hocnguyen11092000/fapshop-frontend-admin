import { useReducer } from "react";
import { AuthState } from "../model/authModel";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";

const INITIAL_STATE: AuthState = {
    user: undefined,
    accessToken: "",
};

interface props {
    children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
    const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{ authState, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
