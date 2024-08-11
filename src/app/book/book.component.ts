import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../interface/Book';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  constructor(private cartService: CartService){

  }
  @Input() book: Book = {} as Book;

  // @Output() emitBook = new EventEmitter<Book>()

  isInCart:boolean = false

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book)
    
  }

  removeFromCart(){
  this.isInCart = false
  this.cartService.remove(this.book)    
  }




}
