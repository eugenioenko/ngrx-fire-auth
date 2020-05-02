import { Injectable } from '@angular/core';
import { IAuthSignupRequest } from '../models/auth-signup.request';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user';
import { IAuthLoginRequest } from '../models/auth-login.request';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private logged = false;
    constructor() { }

    public signup(request: IAuthSignupRequest): Observable<IUser> {
        return of(null);
    }

    public login(request: IAuthLoginRequest): Observable<IUser> {
        this.logged = false;
        return of(null);
        return of({
            id: 'asdf',
            email: request.email
        });
    }

    public logout(): Observable<IUser> {
        return of(null);
    }

    public isLoggedIn(): Observable<boolean> {
        return of(this.logged)
    }

}
