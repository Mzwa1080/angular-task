import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/Book';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BooksService } from '../books/books.service';
import { CartService } from '../cart/cart.service';
import { Observable } from 'rxjs';
import { BookComponent } from '../book/book.component';
import { ViewService } from './view.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent implements OnInit {
  book:Book;
  addBookToCart : BookComponent;
  addCurrentBookToCart : CartService
  viewService: ViewService = new ViewService();
  currentQuantity: number = 0;
  quantity : number

  addToCart : CartService 

  constructor(route: ActivatedRoute, private bookService:BooksService) {
    route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('bookId')){
        // console.log(bookService.getBookById(this.book.id));
        // console.log('---', bookService.getBookById(parseInt(params.get('bookId'))));
         this.book = bookService.getBookById(parseInt(params.get('bookId')));
        
      }
    })


    
  }
  ngOnInit(): void {
    this.getItemsInsideCart();
  }
  
  increment() {
    this.viewService.add(this.book.id)
    this.bookPrice()
  }    
  
  decrement( ){
    this.viewService.subtract(this.book.id)
  }

  getItemsInsideCart(){
    // console.log(this.bookService.getBookById(this.book.id));
    this.viewService.get().subscribe({
      next: (res) => {
        this.currentQuantity = res.find(x => x.id === this.book.id).quantity;
      }
    })
  }

  bookPrice(){
    console.log(this.book.price);
    // if(this.quantity > 1){
  //     this.book.price * this.quantity;
  //   }
  //   else{
  //     this.quantity = this.book.price
  //   }
    
  }


}
