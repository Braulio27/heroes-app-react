import { useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user,
    }
}

export const AuthProvider = ({ children }) => {
    const [authState, dispath] = useReducer(AuthReducer, {}, init);

    const login = (name = '') => {
        const user = { id: 'ABC123', name };
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));
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

