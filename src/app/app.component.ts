import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  secondes =0;
  counterSubscription: Subscription = new Subscription;
  constructor() {}              //une observable c'est un objet qui emet des informations dans le temps
                               // ça peut être la progression d'un chargement d'un fichier , un champ de données que l'utilisateur va rentrer des données
                               // ou ça sera toutes les communications http

// à chaque observable on va associer un observer c'est un bloc de code 
//qui sera executer à chaque fois que l'observable emettra une information, une erreur ou un message complete pour dire que 
//que l'observable ne émettra plus rien et que l'observable est detruite .

ngOnInit(){

  // on va créer un observable qui envoie un chiffre toutes les secondes, un compteur finalement .
  // et l'afficher dans le DOM 

  const counter = interval(1000);  // ici on creait une observable qui émet un chiffre toute les seconds
                                  // Donc il va falloir l'observer

                                // maintenant il faut observer le compteur , pour changer le nmbre de seconde counter.subscribe()     
                               // subscribe est une methode qui permet de se soucrire dans une observable et de reagir à ses changements
this.counterSubscription = counter.subscribe(
   (value: number) =>{
    this.secondes = value;
   }
);
  }
 
 ngOnDestroy(){   // elle sera declacher au moment de la desctruction du compnent
   this.counterSubscription.unsubscribe(); // ici il aura destruction du component pour eviter tous comportement infini

 }

}
