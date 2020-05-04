import { Injectable } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {switchMap, map, catchError } from 'rxjs/operators';
import { EAuthActions, AuthLoginRequestAction, AuthLoginSuccessAction, AuthLoginErrorAction, AuthLogoutRequestAction, AuthLogoutSuccessAction, AuthSignupRequestAction, AuthSignupErrorAction } from '../actions/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    @Effect() LoginRequest: Observable<any> = this.actions.pipe(
        ofType(EAuthActions.LoginRequest),
        map((action: AuthLoginRequestAction) => action.payload),
        switchMap(request => this.authService.login(request)),
        catchError(() => of(null)),
        map(response => {
            if (response) {
                this.router.navigate(['/dashboard']);
                return new AuthLoginSuccessAction(response);
            } else {
                return new AuthLoginErrorAction();
            }
        })
    );

    @Effect() SignupRequest: Observable<any> = this.actions.pipe(
        ofType(EAuthActions.SignupRequest),
        map((action: AuthSignupRequestAction) => action.payload),
        switchMap(request => this.authService.signup(request)),
        catchError(() => of(null)),
        map(response => {
            if (response) {
                this.router.navigate(['/dashboard']);
                return new AuthLoginSuccessAction(response);
            } else {
                return new AuthSignupErrorAction();
            }
        })
    );

    @Effect() LogoutRequest: Observable<any> = this.actions.pipe(
        ofType(EAuthActions.LogoutRequest),
        map((action: AuthLogoutRequestAction) => action.payload),
        switchMap(() => this.authService.logout()),
        map(response => {
            this.router.navigate(['/login']);
            return new AuthLogoutSuccessAction();
        })
    );

    constructor(
        private authService: AuthService,
        private actions: Actions,
        private router: Router
    ) { }

}