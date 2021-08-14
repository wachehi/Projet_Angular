import { Component, OnInit } from '@angular/core';
import { AppareilService } from './service/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
isAuth = false;
 lastUpdate = new Date();
 appareils : any;
 


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
 this.appareils = this.appareilService.appareils;

}
onAllumer(){
  this.appareilService.switchOnAll();
}

onEteindre(){
  this.appareilService.switchOffAll();
}


}
