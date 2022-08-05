import { AuthState } from './../model/authModel';
import React, { createContext } from "react";
import { User } from "../model/authModel";


export type UserContextProps = {
    authState: AuthState;
    dispatch: React.Dispatch<any>
}


export const AuthContext = createContext<UserContextProps>({} as UserContextProps);