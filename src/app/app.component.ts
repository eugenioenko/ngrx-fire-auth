import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { Store, createFeatureSelector } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { IAuthState } from './store/state/auth.state';
import { Observable } from 'rxjs';
import { AuthLogoutRequestAction } from './store/actions/auth.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'ng-fire-auth';
    public isLoggedIn = false;
    public auth$: Observable<IAuthState>;

    constructor(
        private store: Store<IAppState>
    ) {
        this.auth$ = this.store.select(createFeatureSelector<IAuthState>('auth'));
    }

    public logout(): void {
        this.store.dispatch(new AuthLogoutRequestAction());
    }
}
