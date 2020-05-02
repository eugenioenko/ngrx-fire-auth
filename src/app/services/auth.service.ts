import { Injectable } from '@angular/core';
import { IAuthSignupRequest } from '../models/auth-signup.request';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user';
import { IAuthLoginRequest } from '../models/auth-login.request';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    public signup(request: IAuthSignupRequest): Observable<IUser> {
        return of(null);
    }

    public login(request: IAuthLoginRequest): Observable<IUser> {
        return of(null);
    }

    public logout(): Observable<IUser> {
        return of(null);
    }

}
