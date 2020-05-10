import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAlertState } from 'src/app/store/state/alert.state';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss']
})
export class AlertContainerComponent implements OnInit {

    public alert$: Observable<IAlertState>
    constructor(
      private store: Store<IAppState>
    ) { }

    ngOnInit(): void {
        this.alert$ = this.store.select(createFeatureSelector<IAlertState>('alert'));
    }

}
