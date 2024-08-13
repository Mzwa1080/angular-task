import { Component } from '@angular/core';
import { Book } from '../interface/Book';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BooksService } from '../books/books.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {
  book:Book;
  books : Book[]=[];

  addToCart : CartService 

  constructor(route: ActivatedRoute, private bookService:BooksService) {
    route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('bookId')){
        // console.log(bookService.getBookById(this.book.id));
        console.log('-----------------------', bookService.getBookById(parseInt(params.get('bookId'))));
        
        
         this.book = bookService.getBookById(parseInt(params.get('bookId')));
        
      }
    })
  }


  increment(){
    console.log('Button is Clicked');
    console.log(this.book);
    
    // console.log(this.addToCart.add(this.book));
    
  }



}
