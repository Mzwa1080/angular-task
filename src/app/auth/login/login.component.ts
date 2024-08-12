import { Component, HostListener } from '@angular/core';
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

  ngOnInit() {
    // Start the session when the user logs in
    this.authService.startSession();
  }

  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  @HostListener('document:click')
  
  handleUserActivity() {
    this.authService.resetTimeout();
  }
  submitMethod() {
    this.authService.login(this.form)
  }



}

