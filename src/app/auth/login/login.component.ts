import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, createFeatureSelector } from '@ngrx/store';
import { AuthLoginRequestAction } from 'src/app/store/actions/auth.actions';
import { IAuthState } from 'src/app/store/state/auth.state';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public auth$: Observable<IAuthState>;
    public form = {email: 'enkoreaver@gmail.com', password: 'minino333'};

    constructor(
        private store: Store<IAppState>
    ) { }

    public ngOnInit(): void {
        this.auth$ = this.store.select(createFeatureSelector<IAuthState>('auth'));
    }

    public login(): void {
        this.store.dispatch(new AuthLoginRequestAction(this.form));
    }

}
