import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertContainerComponent } from './alert-container/alert-container.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [AlertContainerComponent, AlertMessageComponent],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
      AlertContainerComponent,
      AlertMessageComponent
  ]
})
export class CoreModule { }
