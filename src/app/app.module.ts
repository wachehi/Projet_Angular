import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { ApareilComponent } from './apareil/apareil.component';

import { AppareilService } from './service/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './service/auth-guard.service';

const appRoutes: Routes = [
   {path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent},  // canActivate:[AuthGuard] : permet de s'autentifier avant d'avoir acceès appareils
   {path: 'appareils/:id',canActivate:[AuthGuard], component: SingleAppareilComponent}, // canActivate:[AuthGuard] : pareil aussi pour le SingleAppareil
   {path: 'auth', component: AuthComponent},
   {path: '', component: AppareilViewComponent },
   {path: 'not-found', component: FourOhFourComponent },
   {path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    ApareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
