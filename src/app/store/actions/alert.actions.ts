import { Action } from '@ngrx/store';
import { IAlertMessage } from 'src/app/models/alert-message';

export enum EAlertActions {
    AlertGlobalAdd = '[Alert] Global Add',
    AlertGlobalRemove = '[Alert] Global Remove',
    AlertToastAdd = '[Alert] Toast Add',
    AlertToastRemove = '[Alert] Toast Remove'
}

export class AlertGlobalAddAction implements Action {
    public readonly type = EAlertActions.AlertGlobalAdd;
    constructor(public payload: IAlertMessage){ }
}

export class AlertGlobalRemoveAction implements Action {
    public readonly type = EAlertActions.AlertGlobalRemove;
    constructor(public payload: number){ }
}

export class AlertToastAddAction implements Action {
    public readonly type = EAlertActions.AlertToastAdd;
    constructor(public payload: IAlertMessage){ }
}

export class AlertToastRemoveAction implements Action {
    public readonly type = EAlertActions.AlertToastRemove;
    constructor(public payload: number){ }
}

export type AlertActions = AlertGlobalAddAction | AlertGlobalRemoveAction |
    AlertToastAddAction | AlertToastRemoveAction;
