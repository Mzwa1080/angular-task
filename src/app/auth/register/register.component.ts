import { Component } from '@angular/core';
import { LoginForm } from '../../interface/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form : LoginForm ={
    email: '',
    password : '',
    confirm_password : ''
  }

  registerForm(){
    alert('Form Registered');
    
  }
}
