import { AuthState } from '../model/authModel';

type AuthAction =
    | { type: 'login', payload: AuthState }
// | { type: 'logout', payload: { id: string } };


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'login':
            return {
                ...state,
                user: action.payload.user,
                accessToken: action.payload.accessToken
            }
        default:
            return state;
    }

}