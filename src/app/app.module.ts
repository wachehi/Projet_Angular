import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
   {path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent},  // canActivate:[AuthGuard] : permet de s'autentifier avant d'avoir acceès appareils
   {path: 'appareils/:id',canActivate:[AuthGuard], component: SingleAppareilComponent}, // canActivate:[AuthGuard] : pareil aussi pour le SingleAppareil
   {path: 'edit',canActivate:[AuthGuard], component: EditAppareilComponent },
   {path: 'auth', component: AuthComponent},
   {path: 'users', component: UserListComponent },
   {path: 'new-user', component: NewUserComponent },
   {path: '', component: AuthComponent },
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
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,     // ajout ReactiveFormsModule pour préparer le terrain pour le formulaire selon la methode reactive
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
