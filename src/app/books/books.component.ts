import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../interface/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [];
  cart: Book[] = [];
  inputName: string = "";
  isDisable: boolean = false; 
  isShowing: boolean = true;

  constructor(private booksService: BooksService) {}
  toDestroy : boolean = false;

  ngOnInit() {
    this.books = this.booksService.getBooks();  
  }

  ngOnDestroy() {
    this.toDestroy = !this.toDestroy
  }

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }

}
