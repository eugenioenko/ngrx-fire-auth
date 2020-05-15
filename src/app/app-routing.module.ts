import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { ClientsComponent } from './clients/clients/clients.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'clients', canActivate: [AuthGuard], component: ClientsComponent,
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
