import { Action } from '@ngrx/store';
import { IAuthLoginRequest } from 'src/app/models/auth-login.request';
import { IUser } from 'src/app/models/user';

export enum EAuthActions {
    Initialized = '[Auth] Initialized',
    LoginRequest = '[Auth] LoginRequest',
    LoginSuccess = '[Auth] LoginSuccess',
    LoginError = '[Auth] LoginError',
    LogoutRequest = '[Auth] LogoutRequest',
    LogoutSuccess = '[Auth] LogoutSuccess',
    Signup = '[Auth] Signup'
}

export class AuthInitializedAction implements Action {
    public readonly type = EAuthActions.Initialized;
    constructor(public payload: void){ }
}

export class AuthLoginRequestAction implements Action {
    public readonly type = EAuthActions.LoginRequest;
    constructor(public payload: IAuthLoginRequest){ }
}


export class AuthLoginSuccessAction implements Action {
    public readonly type = EAuthActions.LoginSuccess;
    constructor(public payload: IUser){ }
}

export class AuthLoginErrorAction implements Action {
    public readonly type = EAuthActions.LoginError;
    constructor(public payload: void){ }
}

export class AuthLogoutRequestAction implements Action {
    public readonly type = EAuthActions.LogoutRequest;
    constructor(public payload: void){ }
}

export class AuthLogoutSuccessAction implements Action {
    public readonly type = EAuthActions.LogoutSuccess;
    constructor(public payload: void){ }
}

export class AuthSignupAction implements Action {
    public readonly type = EAuthActions.Signup;
    constructor(public payload: IUser){ }
}

export type AuthActions = AuthLoginRequestAction | AuthLoginSuccessAction |
    AuthLoginErrorAction | AuthLogoutRequestAction | AuthLogoutSuccessAction |
    AuthSignupAction | AuthInitializedAction;
