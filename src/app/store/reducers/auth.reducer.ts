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
            case EAuthActions.SignupError:
                return {
                    ...state,
                    user: null,
                    error: 'Could not create an account. User is invalid or already exist. Try logging in or singup with a different account'
                }
        case EAuthActions.Initialized:
                return {
                    ...state,
                    ready: true
                }
        case EAuthActions.LogoutRequest:
            return initialAuthSate
        default:
            return state;
    }
}
