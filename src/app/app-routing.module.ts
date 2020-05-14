import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientsAddComponent } from './clients/clients-add/clients-add.component';
import { ClientsEditComponent } from './clients/clients-edit/clients-edit.component';


const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },

    {
        path: 'clients', canActivate: [AuthGuard],
        children: [
            { path: 'new', component: ClientsAddComponent },
            { path: 'edit/:id', component: ClientsEditComponent },
            { path: '', component: ClientsListComponent }
        ]
    },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
