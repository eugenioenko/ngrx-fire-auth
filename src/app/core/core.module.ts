import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertContainerComponent } from './alert-container/alert-container.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ClarityModule } from '@clr/angular';
import { AlertGlobalComponent } from './alert-global/alert-global.component';



@NgModule({
  declarations: [AlertContainerComponent, AlertMessageComponent, AlertGlobalComponent],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
      AlertContainerComponent,
      AlertMessageComponent,
      AlertGlobalComponent
  ]
})
export class CoreModule { }
