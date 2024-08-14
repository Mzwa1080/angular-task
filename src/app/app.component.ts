import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';

@Component({
  // selector: '#app-root',
  selector : 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Book-Library';

  constructor(private authService : AuthService) {}
  
  ngOnInit():void{
    initializeApp(firebaseConfig)
  }

  isAuthenticated(){
    return this.authService.isAuthenticated
  }

  logoutSession(){
    
    return this.authService.logout()
  }



}
