import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { AuthLogoutRequestAction } from 'src/app/store/actions/auth.actions';
import { AlertGlobalAddAction } from 'src/app/store/actions/alert.actions';
import { NotificationService } from 'src/app/services/notification.service';
import { EAlertType } from 'src/app/models/alert-type.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(
        private store: Store<IAppState>,
        private notificationService: NotificationService
    ) { }

    public ngOnInit(): void {
    }

    public logout(): void {
        this.store.dispatch(new AuthLogoutRequestAction());
    }

    public toast(): void {
        // this.store.dispatch(new AlertGlobalAddAction('test'));
        this.notificationService.global('text', EAlertType.Warning);
        this.notificationService.global('text', EAlertType.Danger);
        this.notificationService.toast('text', EAlertType.Danger);
        this.notificationService.toast('toast', EAlertType.Warning);
        this.notificationService.toast('text', EAlertType.Danger);
    }

}
