import { useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";

const initialState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {
    const [authState, dispath] = useReducer(AuthReducer, initialState);

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC123',
                name: name
            }
        }
        dispath(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

