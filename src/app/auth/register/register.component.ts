import { Component } from '@angular/core';
import { LoginForm } from '../../interface/Auth';
import { getAuth, createUserWithEmailAndPassword } from "../../../../node_modules/@firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authUser : AuthService){}
  
  passwordMatch : boolean = false;

  form : LoginForm = {
    email: '',
    password : '',
    confirm_password : ''
  }


  registerForm(){
   this.authUser.register(this.form)
  }
}


