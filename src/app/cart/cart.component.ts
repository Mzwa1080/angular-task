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
  totalAmount = 0;
  bookItems : any = false;

  constructor(private readonly behaviorService: BehaviorService) { }
  
  ngOnInit() {
    this.behaviorService.getItems().subscribe({
      next: (response: Book[]): void => {
        if(response.length === 0){
          this.books = JSON.parse(this.behaviorService.getBooksFromLocalStorageForCart()); 
        } else{
          this.books = response;
        }
      },
      error: (error) => {
      }
    });

    
    this.behaviorService.getCartTotalPrice().subscribe({
      next: (total: number) => {
        if(this.behaviorService.getBooksFromLocalStorageForCart()){
          this.totalAmount = total;
        }
      },
      error: (error) => {
      }
    });    
    this.displayBookItems()
  }

  displayBookItems() {
    this.behaviorService.getTotalQuantityy().subscribe(value => {
      if (value > 1) {
        this.bookItems = true;
      } else {
        this.bookItems = false;  
      }
    });
  }


  increment(book: Book) {
    this.behaviorService.add(book);
  }

  decrement(book: Book) {
    this.behaviorService.subtract(book);

  }

  totalAmountt(){
    console.log(this.behaviorService.getItems());
    
  }
  

  
}



