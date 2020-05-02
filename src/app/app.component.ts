import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'ng-fire-auth';
    public isLoggedIn = false;

    constructor(public router: Router) {

    }

}
