import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [DashboardComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
