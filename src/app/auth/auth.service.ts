import { Injectable } from '@angular/core';
import { LoginForm } from '../interface/Auth';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  //  == = == == = == = =VARIABLESS
  isAuthenticated: boolean = false

  auth = getAuth();

  // ==== == == = METHODS + = == = == = 
  login(form: LoginForm) {
    console.log('hello hereeee')
    signInWithEmailAndPassword(this.auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false
      });
  }

  register(form: LoginForm) {
    const auth = getAuth()

    console.log(createUserWithEmailAndPassword(auth, form.email, form.password));

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed up 

        const user = userCredential.user;
        console.log("user has been registered!");
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  logout() {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['login'])
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }








}



