import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';
import { CartComponent } from './cart/cart.component';

@Component({
  // selector: '#app-root',
  selector : 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Book-Library';
  cartItems: CartComponent
  itemsValue : number 
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
  
  // getTheItemsInCart(){
  //   this.itemsValue = this.cartItems.getCart().length;
    
  // }


}
