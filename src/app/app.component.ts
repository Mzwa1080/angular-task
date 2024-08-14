import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';
import { CartComponent } from './cart/cart.component';
import { BehaviorService } from './shared/behavior.service';

@Component({
  // selector: '#app-root',
  selector : 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  
    cartItemCount: number = 0;
  title = 'Book-Library';
  cartItems: CartComponent
  itemsValue : number 
  constructor(private authService : AuthService , private behaviorService: BehaviorService) {}
  
  ngOnInit():void{
    initializeApp(firebaseConfig)
    this.behaviorService.getTotalQuantity().subscribe(count => {
      this.cartItemCount = count;
    });
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
