import { Injectable } from '@angular/core';
import { IAuthSignupRequest } from '../models/auth-signup.request';
import { Observable, of, from} from 'rxjs';
import { IUser } from '../models/user';
import { IAuthLoginRequest } from '../models/auth-login.request';
import { AngularFireAuth } from  "@angular/fire/auth";
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthLoginSuccessAction, AuthInitializedAction } from '../store/actions/auth.actions';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private fireAuth: AngularFireAuth,
        private router: Router,
        private store: Store
    ) {
        this.fireAuth.authState.subscribe(user => {
            this.store.dispatch(new AuthInitializedAction());
            if (user) {
                this.router.navigate(['/dashboard']);
                this.store.dispatch(new AuthLoginSuccessAction(this.userFromFireUser(user)))
            }
        });
    }

    private userFromFireUser(user: firebase.User): IUser {
        return {
            id: user.uid,
            email: user.email
        };
    }
    public signup(request: IAuthSignupRequest): Observable<IUser> {
        const signUp = this.fireAuth
            .createUserWithEmailAndPassword(request.email, request.password);

        return from(signUp).pipe(
            map(response => {
                if (response) {
                    return this.userFromFireUser(response.user);
                } else {
                    return null;
                }
            })
        );
    }

    public login(request: IAuthLoginRequest): Observable<IUser> {
        const singInPromise = this.fireAuth
            .signInWithEmailAndPassword(request.email, request.password);
        return from(singInPromise).pipe(
            map(response => {
                if (response) {
                   return this.userFromFireUser(response.user);
                } else {
                    return null;
                }
            })
        );
    }

    public logout(): Observable<any> {
        const logOutPromise = this.fireAuth.signOut();
        return from(logOutPromise).pipe(
            map(response => {
                return null;
            })
        );
    }

    public isLoggedIn(): Observable<boolean> {
        const currentUserPromise = this.fireAuth.currentUser;
        return from(currentUserPromise).pipe(
            map(currentUser => {
                if (currentUser) {
                    return true;
                } else {
                    return false;
                }
            })
        );
    }

    public currentUser(): Observable<IUser> {
        const currentUserPromise = this.fireAuth.currentUser;
        return from(currentUserPromise).pipe(
            map(currentUser => {
                if (currentUser) {
                    return <IUser> {
                        id: currentUser.uid,
                        email: currentUser.email
                    };
                } else {
                    return null;
                }
            })
        );
    }

}
