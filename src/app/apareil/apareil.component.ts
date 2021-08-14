import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-apareil',
  templateUrl: './apareil.component.html',
  styleUrls: ['./apareil.component.scss']
})
export class ApareilComponent implements OnInit {

   // declaration des variables avec @Input permet de passer des variables à partir de 
   // component parent jusqu'au component enfant .
   @Input() appareilName = ''; 
   @Input() appareilStatus ='';
   @Input() indexOfAppareil = 0;

  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {
    
  }

  getStatus(){
    return this.appareilStatus;
  }
  getColor() {
    if(this.appareilStatus === 'allumé'){
      return 'green';
    } else if(this.appareilStatus === 'éteint'){
     return 'red';
    } else {
       return 'black'
    }
 
   }
  onSwitchOn(){
   this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
   }

}
