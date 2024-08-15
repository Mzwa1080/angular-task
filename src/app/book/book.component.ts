import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interface/Book';
import { CartService } from '../cart/cart.service';
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

  addToCart() {
    this.isInCart = true;
    this.behaviorService.add(this.book)

  }

  // @Output() emitBook = new EventEmitter<Book>()


  removeFromCart() {
    this.isInCart = false
    this.behaviorService.subtract(this.book)
  }

  // You need method to add to cart shart when clicking rthe + butnno

  // method to calculate the lenghrt the inisde the moethid , then its the one I'm going interpolate


}
