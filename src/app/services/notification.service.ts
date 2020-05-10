import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { EAlertType } from '../models/alert-type.enum';
import { AlertGlobalAddAction, AlertToastAddAction } from '../store/actions/alert.actions';
import { IAlertMessage } from '../models/alert-message';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(
        private store: Store<IAppState>
    ) { }

    public global(message: string, type: EAlertType, action?: string): Subject<number> {
        const confirmation = new Subject<number>();
        const alert: IAlertMessage = {
            type: EAlertType[type].toLowerCase(),
            text: message,
            subject: confirmation,
            action: action

        }
        this.store.dispatch(new AlertGlobalAddAction(alert));
        return confirmation;
    }

    public toast(message: string, type: EAlertType): void {
        const alert: IAlertMessage = {
            type: EAlertType[type].toLowerCase(),
            text: message,
            subject: null,
            action: null
        }
        this.store.dispatch(new AlertToastAddAction(alert));
    }

}
