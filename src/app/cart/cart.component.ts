import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../shared/behavior.service';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books: Book[] = [];

  constructor(private readonly behaviorService: BehaviorService) { }
  
  ngOnInit() {
    this.behaviorService.getItems().subscribe({
      next: (response: Book[]): void => {
        this.books = response;
      },
      error: (error) => {
      }
    });
  }

  increment(book: Book) {
    this.behaviorService.add(book);
  }

  decrement(book: Book) {
    this.behaviorService.subtract(book);
  }
}
