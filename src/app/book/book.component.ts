import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Book } from '../interface/Book';
import { CartService } from '../cart/cart.service';
import { BehaviorService } from '../shared/behavior.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnChanges {
  constructor(private behaviorService: BehaviorService){

  }
  isInCart:boolean = false


  @Input() book: Book = {} as Book;

  ngOnChanges(changes : SimpleChanges ) : void{
    // console.log(changes);
    for(const bookDetails in changes){
      // let bboook = JSON.stringify(this.book)
      console.log(bookDetails);
      
      
    }
    
  }

  addToCart(){
    this.isInCart = true;
    this.behaviorService.add(this.book)
    
  }

  // @Output() emitBook = new EventEmitter<Book>()


  removeFromCart(){
  this.isInCart = false
  this.behaviorService.subtract(this.book)    
  }

// You need method to add to cart shart when clicking rthe + butnno

// method to calculate the lenghrt the inisde the moethid , then its the one I'm going interpolate


}
