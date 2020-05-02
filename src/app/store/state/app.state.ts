import { RouterReducerState } from '@ngrx/router-store'
import { IAuthState, initialAuthSate } from './auth.state';

export interface IAppState {
    router?: RouterReducerState;
    auth: IAuthState
}

export function getInitialAppState(): IAppState {
    return {
        auth: initialAuthSate
    };
}
