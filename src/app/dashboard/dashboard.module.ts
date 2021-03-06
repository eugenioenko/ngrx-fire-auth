import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent, NotFoundComponent, SidenavComponent],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ], exports: [
      SidenavComponent
  ]
})
export class DashboardModule { }
