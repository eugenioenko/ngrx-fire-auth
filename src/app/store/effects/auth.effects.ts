import { Injectable } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of} from 'rxjs';
import {switchMap, map, tap } from 'rxjs/operators';
import { EAuthActions, AuthLoginRequestAction, AuthLoginSuccessAction, AuthLoginErrorAction } from '../actions/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    @Effect() LoginRequest: Observable<any> = this.actions.pipe(
        ofType(EAuthActions.LoginRequest),
        map((action: AuthLoginRequestAction) => action.payload),
        switchMap(request => this.authService.login(request)),
        map(response => {
            if (response) {
                this.router.navigate(['/dashboard']);
                return new AuthLoginSuccessAction(response);
            } else {
                return new AuthLoginErrorAction(response);
            }
        })
    );

    constructor(
        private authService: AuthService,
        private actions: Actions,
        private router: Router
    ) { }

}