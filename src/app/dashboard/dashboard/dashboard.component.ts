import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { AuthLogoutRequestAction } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(
        private store: Store<IAppState>
    ) { }

    public ngOnInit(): void {
    }

    public logout(): void {
        this.store.dispatch(new AuthLogoutRequestAction());
    }

}
