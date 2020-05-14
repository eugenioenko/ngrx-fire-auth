import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsEditComponent } from './clients-edit/clients-edit.component';



@NgModule({
  declarations: [ClientsListComponent, ClientsAddComponent, ClientsEditComponent],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
