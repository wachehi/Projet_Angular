import { Subject } from "rxjs";
import { User } from "../models/User.model";

export  class UserService {
  private users: User[] = [
     {
       firstName : 'James',
       lastName : 'Smith',
       email: 'james@hotmail.com',
       drinkPreference : 'Coca',
       hobbies: [
         'coder', 
         'degustation café',
       ]
     }

  ];
  userSubject = new Subject<User[]>(); //on va créer un objetSubject qui emettre des array d'objet de type du model user


 emitUsers(){                          
   this.userSubject.next(this.users.slice()) ;  // cette methode va appeler une methode next de l'objet subject et qui va emettre une copie de l'array user
 }

 addUser(user: User) {
     this.users.push(user);
     this.emitUsers();
 }

}