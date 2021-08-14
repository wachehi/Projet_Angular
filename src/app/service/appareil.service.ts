export class AppareilService {
    appareils = [
        {
           name: 'Machine à laver',
           status : 'éteint'
        },
        {
          name: 'Télévesion',
          status : 'allumé'
       },
       {
        name: 'Ordinateur',
        status : 'éteint'
      }, 
      {
        name: 'Souris',
        status : 'autre'
      }
    
     ];

 switchOnAll() {
  for(let appareil of this.appareils){
      appareil.status = 'allumer';
  }
 }
 switchOffAll() {
    for(let appareil of this.appareils){
        appareil.status = 'éteint';
    }
   }
   switchOnOne(index : number){
    this.appareils[index].status = 'allumé';
  }
  switchOffOne(index : number){
    this.appareils[index].status = 'éteint';
  } 

}