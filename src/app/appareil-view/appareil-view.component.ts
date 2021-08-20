import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  lastUpdate = new Date();
 

  
 appareils!: any[];
 appareilSubscription: Subscription = new Subscription;
 constructor(private appareilService : AppareilService){
 
   setTimeout(
     () => {
       this.isAuth = true;
     }, 4000
   );
 }
 // la methode ngOnInit() est execute au moment de la création du component
 // et juste après l'execution du constructeur
 ngOnInit(){
  this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
           (appareils: any[]) =>{
            this.appareils = appareils;
           }

  )
 
 }
 onAllumer(){
   this.appareilService.switchOnAll();
 }
 
 onEteindre(){
   this.appareilService.switchOffAll();
 }

}
