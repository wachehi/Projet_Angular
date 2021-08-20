import { Subject } from "rxjs";

export class AppareilService {

   appareilSubject = new Subject<any[]>();  // création d'un Subject pour emettre que la liste qu'on veut emettre
   private  appareils = [
        {
           id:1,
           name: 'Machine à laver',
           status : 'éteint'
        },
        {
          id:2,
          name: 'Télévesion',
          status : 'allumé'
       },
       {
         id:3,
        name: 'Ordinateur',
        status : 'éteint'
      }, 
      {
        id:4,
        name: 'Souris',
        status : 'autre'
      }
    
     ];

   emitAppareilSubject(){           // on crée une methode qui fera en sorte que le suject emette la liste des appareils
                                    // pour pouvoir y acceder depuis l'exterieur .
    this.appareilSubject.next(this.appareils.slice());
   }


  getAppareilById(id: number){

  const appareil = this.appareils.find(
    (appareilObject) => {
      return appareilObject.id === id;
    }
  );
    return appareil;
  }

 switchOnAll() {
  for(let appareil of this.appareils){
      appareil.status = 'allumer';
  }
   this.emitAppareilSubject();             // on va faire emettre pour que les components qui osont souscrit à ce subject veront le changement
 }
 switchOffAll() {
    for(let appareil of this.appareils){
        appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
   }
   switchOnOne(index : number){
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }
  switchOffOne(index : number){
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  } 

}