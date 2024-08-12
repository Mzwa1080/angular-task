import { Component } from '@angular/core';
import { LoginForm } from '../../interface/Auth';
import { getAuth, signInWithEmailAndPassword } from "../../../../node_modules/@firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // email : string = "";

  form: LoginForm = {
    email: '',
    password: '',
    confirm_password : ''
  }


  submitMethod() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
        console.log('You have been logged in!!');
        
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  submit(){
    console.log('Submitt something when this button is');
    
  }

}

