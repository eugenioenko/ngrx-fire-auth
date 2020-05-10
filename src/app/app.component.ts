import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { Store, createFeatureSelector } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { IAuthState } from './store/state/auth.state';
import { Observable } from 'rxjs';
import { AuthLogoutRequestAction } from './store/actions/auth.actions';
import { IAlertState } from './store/state/alert.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'ng-fire-auth';
    public isLoggedIn = false;
    public auth$: Observable<IAuthState>;
    public alert$: Observable<IAlertState>;

    constructor(
        private store: Store<IAppState>
    ) {
        this.auth$ = this.store.select(createFeatureSelector<IAuthState>('auth'));
        this.alert$ = this.store.select(createFeatureSelector<IAlertState>('alert'));
    }

    public logout(): void {
        this.store.dispatch(new AuthLogoutRequestAction());
    }
}
