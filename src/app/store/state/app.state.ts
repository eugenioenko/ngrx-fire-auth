import { RouterReducerState } from '@ngrx/router-store'
import { IAuthState, initialAuthSate } from './auth.state';
import { IAlertState, initialAlertState } from './alert.state';

export interface IAppState {
    auth: IAuthState,
    alert: IAlertState
}

export function getInitialAppState(): IAppState {
    return {
        auth: initialAuthSate,
        alert: initialAlertState
    };
}
