import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServicesModule } from './services/services.module';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducer';
import { AuthEffects } from './store/effects/auth.effects';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { firebaseConfig } from 'keys/firebaseConfig';
import { CoreModule } from './core/core.module';
import { AuthService } from './services/auth.service';

export function startupAuthServiceFactory(authService: AuthService): () => Promise<any> {
    return () => authService.init();
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    ServicesModule,
    ClarityModule,
    RouterModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    CoreModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: startupAuthServiceFactory,
    deps: [AuthService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
