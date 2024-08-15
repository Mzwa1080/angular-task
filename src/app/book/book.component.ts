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
  }

  // Need to check if item that is seleccted from the behavior is in the cart.
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
