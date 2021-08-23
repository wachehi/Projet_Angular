import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
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
       drinkPreference: ['', Validators.required],
       hobbies: this.formBuilder.array([])                  // pour permettre à l'utilisateur d'ajouter dynamiquement de controls 
                                                            // aux formulaires on va utiliser un form array
     });

  }

 
  onSubmitForm(){
    const formValue = this.userForm.value  // ici on récupère toutes les valeurs du controle  formulaire 
    const newUser = new User(
       formValue['firstName'],
       formValue['lastName'],
       formValue['email'],
       formValue['drinkPreference'],
       formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);   // on appel la fonction ajouter utilisateur
    this.router.navigate(['/users']);
  }

  // Pour des raisons de typage on va créer une methode qui permet de retourner de format
  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  // On va créer une methode pour ajouter un controle pour ajouter un Hobbies
   onAddHobby(){
     const newHobbyControl = this.formBuilder.control('', Validators.required);
      this.getHobbies().push(newHobbyControl);
   }

}
