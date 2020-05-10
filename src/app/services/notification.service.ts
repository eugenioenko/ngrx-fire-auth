import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { EAlertType } from '../models/alert-type.enum';
import { AlertGlobalAddAction, AlertToastAddAction } from '../store/actions/alert.actions';
import { IAlertMessage } from '../models/alert-message';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(
        private store: Store<IAppState>
    ) { }

    public global(message: string, type: EAlertType): void {
        const alert: IAlertMessage = {
            type: EAlertType[type].toLowerCase(),
            text: message
        }
        this.store.dispatch(new AlertGlobalAddAction(alert));
    }

    public toast(message: string, type: EAlertType): void {
        const alert: IAlertMessage = {
            type: EAlertType[type].toLowerCase(),
            text: message
        }
        this.store.dispatch(new AlertToastAddAction(alert));
    }

}
