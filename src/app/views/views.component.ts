import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/Book';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BooksService } from '../books/books.service';
import { BehaviorService } from '../shared/behavior.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  book: Book;
  quantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private behaviorService: BehaviorService
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const bookId = params.get('bookId');
      if (bookId) {
        this.book = this.bookService.getBookById(parseInt(bookId));
      }
    });
  }

  ngOnInit(): void {
    this.getItemsInsideCart();
  }

  increment() {
    if (this.book) {
      this.behaviorService.add(this.book);
      this.updateQuantity();  
    }
  }

  decrement() {
    if (this.book && this.quantity > 0) {
      this.behaviorService.subtract(this.book);
      this.updateQuantity();
    }
  }

  getItemsInsideCart() {
    this.behaviorService.getCartItems().subscribe({
      next: (res) => {
        if (this.book) {
          const item = res.find(x => x.id === this.book.id);
          if (item) {
            this.quantity = item.quantity;
          }
        }
      }
    });
  }

  updateQuantity() {
    const cartItems = this.behaviorService.behaviorSubject.value;
    const item = cartItems.find(x => x.id === this.book.id);
    if (item) {
      this.quantity = item.quantity;
    }
  }

  bookPrice(){
    // console.log(this.book.price);
    // console.log(this.currentQuantity);

    if(this.quantity > 0){
      this.quantity  = this.quantity * this.book.price
      console.log(this.quantity);
      
    }else{
      this.quantity = this.book.price
    }
    
    // if(this.quantity > 1){
  //     this.book.price * this.quantity;
  //   }
  //   else{
  //     this.quantity = this.book.price
  //   }
    
  }
}
