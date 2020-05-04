import { Component, OnInit } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { IAuthState } from 'src/app/store/state/auth.state';
import { AuthSignupRequestAction } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public form = {email: '', password: '', confirmPassword: ''};
    public auth$: Observable<IAuthState>;

    constructor(
        private store: Store<IAppState>
    ) { }

    public ngOnInit(): void {
        this.auth$ = this.store.select(createFeatureSelector<IAuthState>('auth'));
    }

    public signup(): void {
        this.store.dispatch(new AuthSignupRequestAction(this.form));
    }

}
