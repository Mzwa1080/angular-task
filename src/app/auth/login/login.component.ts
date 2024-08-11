import { Component } from '@angular/core';
import { LoginForm } from '../../interface/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // email : string = "";

  form: LoginForm ={
    email: '',
    password : '',
    confirm_password : ''
  } 


  submitMethod(){
    alert('Mzwaaaa')
  }

}

