import { Component } from '@angular/core';
import { LoginForm } from '../../interface/Auth';
import { AuthService } from '../auth.service';
// import { getAuth, signInWithEmailAndPassword } from "../../../../node_modules/@firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent {

  constructor(private authService : AuthService){}

  form: LoginForm = {
    email: '',
    password: '',
    confirm_password : ''
  }

  ngOnInit(): void{}

  submitMethod() {
    this.authService.login(this.form)
  }



}

