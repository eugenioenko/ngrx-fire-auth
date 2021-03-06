import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { authReducers } from './auth.reducer';
import { alertReducers } from './alert.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    auth: authReducers,
    alert: alertReducers
};
