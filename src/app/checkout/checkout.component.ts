import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../shared/behavior.service';
import { Book } from '../interface/Book';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  
  books : Book[] = []
  totalAmountOfBooks : number = 0;
  paymentMethodBtn:Boolean = true; 
  paymentMethod: Boolean = true;

  constructor(private behaviorService : BehaviorService){
    this.getBooksFromLocalStorageInBehaviorSubject()
  }
  payWithVisa(){
    this.paymentMethod = true
  }
  payWithOzow(){
    this.paymentMethod = !this.paymentMethod
  }
  
  ngOnInit(){
    this.totalProducts()    

  }

  getBooksFromLocalStorageInBehaviorSubject(){
    return this.books = JSON.parse(this.behaviorService.getBooksFromLocalStorageForCart())
  }

  totalWithTax(){

  }

  totalProducts(){
    this.behaviorService.getCartTotalPrice().subscribe({
      next: (total: number) => {
        if(this.behaviorService.getBooksFromLocalStorageForCart()){
          this.totalAmountOfBooks = total;
          console.log(this.totalAmountOfBooks);
          
        }
      },
      error: (error) => {
      }
    });
  }
  
  

}
