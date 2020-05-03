import { initialAuthSate, IAuthState } from '../state/auth.state'
import { AuthActions, EAuthActions } from '../actions/auth.actions'

export const authReducers = (
    state: IAuthState = initialAuthSate,
    action: AuthActions
): IAuthState => {
    switch (action.type) {
        case EAuthActions.LoginSuccess:
            return {
                ...state,
                user: action.payload,
                error: null
            }
            break;
        case EAuthActions.LoginError:
            return {
                ...state,
                user: null,
                error: 'Invalid email/password combination or user with this email is not registred'
            }
        case EAuthActions.Initialized:
                return {
                    ...state,
                    ready: true
                }
        case EAuthActions.LogoutRequest:
            console.log('logout request action');
            return initialAuthSate
        default:
            return state;
    }
}
