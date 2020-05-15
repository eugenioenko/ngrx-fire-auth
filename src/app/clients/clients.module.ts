import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsEditComponent } from './clients-edit/clients-edit.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [ClientsListComponent, ClientsAddComponent, ClientsEditComponent, ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
