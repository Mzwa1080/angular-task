import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interface/Book';
import { BehaviorService } from '../shared/behavior.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  constructor(private behaviorService: BehaviorService) {
    

  }
  isInCart: boolean = false
  quantity = 0;
  totalAmount = 0;

  @Input() book: Book = {} as Book;

  ngOnInit(): void {
    this.checkIfInCart()
    this.initializeCartState()
    this.initializeTotalAmount()
  }

  checkIfInCart() {
    this.behaviorService.getItems().subscribe({
      next:(cartItems : Book[] ) =>{
        const ItemsInCart = cartItems.find(item => item.id === this.book.id)
        if(ItemsInCart){
          this.isInCart = true;
          this.quantity = ItemsInCart.quantity
        }
      }
  })
  }

  initializeCartState() {
    const storedCartItems = this.behaviorService.getBooksFromLocalStorageForCart();
    if (storedCartItems) {
      const cartItems: Book[] = JSON.parse(storedCartItems);
      this.behaviorService.updateItems(cartItems); 
    }
  }
  initializeTotalAmount() {
    const storedTotalAmount = localStorage.getItem('Total-Amount');
    if (storedTotalAmount) {
      this.totalAmount = JSON.parse(storedTotalAmount);
    }
  }


producerIncrementEpoch(){
  this.behaviorService.add(this.book)
  this.quantity++;
}

  addToCart() {
    this.isInCart = true;
    this.behaviorService.add(this.book)

  }



  removeFromCart() {
    this.isInCart = false
    this.behaviorService.subtract(this.book)
  }


}

