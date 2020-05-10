import { IAlertMessage } from 'src/app/models/alert-message';

export interface IAlertState {
    global: IAlertMessage[];
    toasts: IAlertMessage[];
}

export const initialAlertState: IAlertState = {
    global: [],
    toasts: []
}
