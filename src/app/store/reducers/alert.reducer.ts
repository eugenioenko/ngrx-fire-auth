import { IAlertState, initialAlertState } from '../state/alert.state';
import { AlertActions, EAlertActions} from '../actions/alert.actions';

export const alertReducers = (
    state: IAlertState = initialAlertState,
    action: AlertActions
): IAlertState => {
    switch (action.type) {
        case EAlertActions.AlertGlobalAdd:
            return {
                ...state,
                global: [...state.global, action.payload]
            };
        case EAlertActions.AlertGlobalRemove:
            return {
                ...state,
                global: state.global.filter((v,i) => i !== action.payload)
            };
        case EAlertActions.AlertToastAdd:
            return {
                ...state,
                toasts: [...state.toasts, action.payload]
            };

        case EAlertActions.AlertToastRemove:
            return {
                ...state,
                toasts: state.toasts.filter((v,i) => i !== action.payload)
            };
        default:
            return state;
    }
}
