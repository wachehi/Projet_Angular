import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus = false;

  constructor( private authService : AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
       this.authStatus = this.authService.isAuth;
       this.router.navigate(['appareils']);    // cette ligne veut que après la connexion , il va diriger directement à la route appareil
      }
    );
  }

  onSignOut() {
     this.authService.signOut();
     this.authStatus = this.authService.isAuth;

  }

}
