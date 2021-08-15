export class AppareilService {
    appareils = [
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