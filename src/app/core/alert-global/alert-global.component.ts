import { Component, OnInit } from '@angular/core';
import { IAlertState } from 'src/app/store/state/alert.state';
import { Observable } from 'rxjs';
import { Store, createFeatureSelector } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { AlertGlobalRemoveAction } from 'src/app/store/actions/alert.actions';
import { IAlertMessage } from 'src/app/models/alert-message';

@Component({
  selector: 'app-alert-global',
  templateUrl: './alert-global.component.html',
  styleUrls: ['./alert-global.component.scss']
})
export class AlertGlobalComponent {
    public alert$: Observable<IAlertState>;

    constructor(
        private store: Store<IAppState>
    ) {
        this.alert$ = this.store.select(createFeatureSelector<IAlertState>('alert'));
    }

    public onClose(index: number, alert: IAlertMessage): void {
        alert.subject.next(0);
        alert.subject.complete();
        this.store.dispatch(new AlertGlobalRemoveAction(index));
    }

    public onAction(index: number, alert: IAlertMessage): void {
        alert.subject.next(1);
        // alert.subject.complete();
        this.store.dispatch(new AlertGlobalRemoveAction(index));
    }

}
