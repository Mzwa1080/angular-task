import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../shared/behavior.service';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  email = 'mshawnlouw@gmail.com'
  books : Book[] = []
  totalAmountOfBooks : number = 0; 

  constructor(private behaviorService : BehaviorService){

  }

  ngOnInit(){
    this.getBooksFromLocalStorageInBehaviorSubject()
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
