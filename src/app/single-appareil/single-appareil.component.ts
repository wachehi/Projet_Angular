import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string ='Statut' ;

  constructor(private appareilService : AppareilService, 
              private route: ActivatedRoute) { }  
              // ActivatedRoute contient toutes les informations de la route active
              // donc on peut récupérer les details du  fragment appareils/:id déclarer dans les routes 
  ngOnInit() {
   // donc coup on peut déjà par exemple
   const id = this.route.snapshot.params['id'];    // pour avoir un snapshot , une photo du moment de l'URL 
    
   //this.name = this.appareilService.getAppareilById(+id).name;
   //this.status = this.appareilService.getAppareilById(+id).status;
  }

}
