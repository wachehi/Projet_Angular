import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/User.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit , OnDestroy{

  users: User[] = [];
  userSubscription: Subscription = new Subscription;

  constructor( private userService : UserService,
               private router: Router) { }

  ngOnInit(): void {
     this.userSubscription = this.userService.userSubject.subscribe(
        (users: User[])  => {
          this.users = users;
        }
     );
     this.userService.emitUsers();
  }


  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
