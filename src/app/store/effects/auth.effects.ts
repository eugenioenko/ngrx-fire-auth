import { Injectable } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of} from 'rxjs';
import {switchMap, map } from 'rxjs/operators';
import { EAuthActions, AuthLoginRequestAction, AuthLoginSuccessAction, AuthLoginErrorAction } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

    @Effect() LoginRequest: Observable<any> = this.actions.pipe(
        ofType(EAuthActions.LoginRequest),
        map((action: AuthLoginRequestAction) => action.payload),
        switchMap(request => this.authService.login(request)),
        map(response => {
            if (response) {
                return new AuthLoginSuccessAction({});
            } else {
                return new AuthLoginErrorAction({});
            }
        })
    );

    constructor(
        private authService: AuthService,
        private actions: Actions
    ) { }

}