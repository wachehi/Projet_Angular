import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

/*
 Service guard :  permet d'empecher les utilisateurs d'acceder à des routes,
 Par exemple s'il ne sont pas authentifiés
*/

@Injectable()  // Pour injecter un service dans un autre service il faut mettre le decorateur Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private authService : AuthService,       // injection du service
                private router: Router){ }               // injection des routes

    // l'interface CanActivate oblige d'implimenter une methode canActivate
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
     // une guard va retourner true : si l'utilisateur a le droit d'acceder à cette route

     if(this.authService.isAuth){   // si l'utilisateur est authentifié alors
      return true;
     }else {
       return this.router.navigate(['/auth']); // sinon il sera rediriger dans la route d'autentification
     }

    }



}