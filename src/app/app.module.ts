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

const appRoutes: Routes = [
   {path: 'appareil', component: AppareilViewComponent},
   {path: 'auth', component: AuthComponent},
   {path: '', component: AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    ApareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
