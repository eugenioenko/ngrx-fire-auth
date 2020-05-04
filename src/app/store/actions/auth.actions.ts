import { Action } from '@ngrx/store';
import { IAuthLoginRequest } from 'src/app/models/auth-login.request';
import { IUser } from 'src/app/models/user';
import { IAuthSignupRequest } from 'src/app/models/auth-signup.request';

export enum EAuthActions {
    Initialized = '[Auth] Initialized',
    LoginRequest = '[Auth] LoginRequest',
    LoginSuccess = '[Auth] LoginSuccess',
    LoginError = '[Auth] LoginError',
    LogoutRequest = '[Auth] LogoutRequest',
    LogoutSuccess = '[Auth] LogoutSuccess',
    SignupRequest = '[Auth] SignupRequest',
    SignupSuccess = '[Auth] SignupSuccess',
    SignupError = '[Auth] SignupError'
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

export class AuthSignupRequestAction implements Action {
    public readonly type = EAuthActions.SignupRequest;
    constructor(public payload: IAuthSignupRequest){ }
}

export class AuthSignupSuccessAction implements Action {
    public readonly type = EAuthActions.SignupSuccess;
    constructor(public payload: IUser){ }
}

export class AuthSignupErrorAction implements Action {
    public readonly type = EAuthActions.SignupError;
    constructor(public payload: void){ }
}

export type AuthActions = AuthLoginRequestAction | AuthLoginSuccessAction |
    AuthLoginErrorAction | AuthLogoutRequestAction | AuthLogoutSuccessAction |
    AuthSignupRequestAction | AuthSignupSuccessAction | AuthSignupErrorAction |
    AuthInitializedAction;
