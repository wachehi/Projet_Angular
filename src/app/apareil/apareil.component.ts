import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apareil',
  templateUrl: './apareil.component.html',
  styleUrls: ['./apareil.component.scss']
})
export class ApareilComponent implements OnInit {

   @Input() appareilName = '';
   @Input() appareilStatus ='';

  constructor() { }

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
  

}
