import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { AlertToastRemoveAction } from 'src/app/store/actions/alert.actions';

@Component({
    selector: 'app-alert-message',
    templateUrl: './alert-message.component.html',
    styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {
    @Input() public type: string;
    @Input() public text: string;
    @Input() public index: number;

    constructor(
        private store: Store<IAppState>
    ) { }

    ngOnInit(): void {
    }

    public onClose(index: number): void {
        this.store.dispatch(new AlertToastRemoveAction(index));
    }

}
