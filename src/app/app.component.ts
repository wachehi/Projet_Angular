import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
isAuth = false;
 lastUpdate = new Date();

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


constructor(){

  setTimeout(
    () => {
      this.isAuth = true;
    }, 4000
  );
}
onAllumer(){
  console.log('On allume tout !');
}

}
