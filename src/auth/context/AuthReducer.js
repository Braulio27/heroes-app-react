import { types } from "../types/types";

export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case typespes.login:
            return {
                ...state,
                logged: true,
                name: action.payload,
            };
        case types.logout:
            return {
                logged: false,
                name: null,
            };
        default:
            return state;
    }
}