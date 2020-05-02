import { Action } from '@ngrx/store';
import { IAuthLoginRequest } from 'src/app/models/auth-login.request';

export enum EAuthActions {
    LoginRequest = '[Auth] LoginRequest',
    LoginSuccess = '[Auth] LoginSuccess',
    LoginError = '[Auth] LoginError',
    Logout = '[Auth] Logout',
    Signup = '[Auth] Signup'
}

export class AuthLoginRequestAction implements Action {
    public readonly type = EAuthActions.LoginRequest;
    constructor(public payload: IAuthLoginRequest){ }
}

export class AuthLoginSuccessAction implements Action {
    public readonly type = EAuthActions.LoginSuccess;
    constructor(public payload: any){ }
}

export class AuthLoginErrorAction implements Action {
    public readonly type = EAuthActions.LoginError;
    constructor(public payload: any){ }
}

export class AuthLogoutAction implements Action {
    public readonly type = EAuthActions.Logout;
    constructor(public payload: any){ }
}

export class AuthSignupAction implements Action {
    public readonly type = EAuthActions.Signup;
    constructor(public payload: any){ }
}

export type AuthActions = AuthLoginRequestAction | AuthLoginSuccessAction |
    AuthLoginErrorAction | AuthLogoutAction | AuthSignupAction;
