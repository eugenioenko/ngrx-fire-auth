import { initialAuthSate, IAuthState } from '../state/auth.state'
import { AuthActions, EAuthActions } from '../actions/auth.actions'

export const authReducers = (
    state: IAuthState = initialAuthSate,
    action: AuthActions
): IAuthState => {
    switch (action.type) {
        case EAuthActions.LoginSuccess:
            break;
        case EAuthActions.LoginError:
            break;
        case EAuthActions.Logout:
            break;
        default:
            return state;
    }
}
