import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsEditComponent } from './clients-edit/clients-edit.component';
import { ClientsListComponent } from './clients-list/clients-list.component';


const routes: Routes = [
    { path: 'new', component: ClientsAddComponent },
    { path: 'edit/:id', component: ClientsEditComponent },
    { path: '', component: ClientsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
