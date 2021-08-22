import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup; // c'est l'objet formulaire qui correspondra au formulaire dans le templete

  constructor(private formBuilder: FormBuilder,  //FormBuilder C'est un outil qui permet de créer un formulaire facilement
              private userService: UserService,
              private router: Router   ) { } 

  ngOnInit(){
    this.initForm();
  }

  initForm(){    // Methode pour initier le formulaire
     this.userForm = this.formBuilder.group({             // group est une methode qui retourne un formGroup
       firstName: ['', Validators.required],             // validations de tous les controls
       lastName:  ['', Validators.required],
       email:  ['', Validators.required, Validators.email],
       drinkPreference: ['', Validators.required] 
     });

  }
  onSubmitForm(){
    const formValue = this.userForm.value  // ici on récupère toutes les valeur du controle du formulaire 
    const newUser = new User(
       formValue['firstName'],
       formValue['lastName'],
       formValue['email'],
       formValue['drinkPreference']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

}
