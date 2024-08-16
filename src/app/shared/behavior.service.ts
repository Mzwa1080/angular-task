import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {


  // cartItems: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  addBooks: Book[] = []
  storageKey = 'Cart-Items'
  behaviorSubject = new BehaviorSubject<Book[]>([]);


  constructor() { }




  add(book: Book) {
    const currentValue = this.behaviorSubject.value.find(x => x.id === book.id);
    if (!currentValue) {
      this.behaviorSubject.next([...this.behaviorSubject.value, { ...book, quantity: 1 }]);
    } else {
      const updatedBooks = this.behaviorSubject.value.map(b =>
        b.id === book.id ? { ...b, quantity: b.quantity + 1 } : b);
      this.behaviorSubject.next(updatedBooks);
    }

    localStorage.setItem('Cart-Items', JSON.stringify(this.behaviorSubject.value))
    console.log(this.behaviorSubject.value);
  }

    getBooksFromLocalStorageForCart() {
      return localStorage.getItem('Cart-Items')
  }

  subtract(book: Book) {
    const currentValue = this.behaviorSubject.value.find(x => x.id === book.id);
    
    if (currentValue && currentValue.quantity > 1) {
      const updatedBooks = this.behaviorSubject.value.map(b =>
        b.id === book.id ? { ...b, quantity: b.quantity - 1 } : b
      );
      this.behaviorSubject.next(updatedBooks);
      localStorage.setItem('Cart-Items', JSON.stringify(updatedBooks));
  
      const totalAmount = this.getTotalQuantity(updatedBooks);
      localStorage.setItem('Total-Amount', JSON.stringify(totalAmount));
  
    } else if (currentValue && (currentValue.quantity === 1 || currentValue.quantity === 0)) {
      const updatedBooks = this.behaviorSubject.value.filter(b => b.id !== book.id);
      this.behaviorSubject.next(updatedBooks);
      
      if (updatedBooks.length > 0) {
        localStorage.setItem('Cart-Items', JSON.stringify(updatedBooks));
  
        const totalAmount = this.getTotalQuantity(updatedBooks);
        localStorage.setItem('Total-Amount', JSON.stringify(totalAmount));
  
      } else {
        localStorage.removeItem('Cart-Items');
        window.location.reload();
      }
    }
  
    console.log(this.behaviorSubject.value);
  }
  
  
  

  getItems() {
    // this.getBooksFromLocalStorageForCart()
    return this.behaviorSubject.asObservable();
  }

  updateItems(cartItems: Book[]) {
    this.behaviorSubject.next(cartItems);
  }
  

  getCartItems = (): Observable<Book[]> => {
    return this.behaviorSubject.asObservable();
  }

  getTotalQuantity(books: Book[]): number {
    return books.reduce((sum, book) => sum + (book.quantity * book.price), 0);
  }
  
  getTotalQuantityy(): Observable<number> {
    return this.getCartItems().pipe(
      map((books: Book[]) => books.reduce((sum, book) => sum + book.quantity, 0))
    );
  }

  getCartTotalPrice(): Observable<number> {
    return this.behaviorSubject.asObservable().pipe(
      map(bookPrice => bookPrice.reduce(((total, book) => total + (book.price * book.quantity)), 0))
    );
  }



  // I need to get the price of the items in the cart.
  // Need to loop through every item added there and console.log the price
  // save that price in a new variable and print it 
  getTotalNumberOfBooks() {
    // console.log(this.behaviorSubject.value);
    // let totalItems = this.behaviorSubject.value
    for (let totalItems of this.behaviorSubject.value) {
      const totalPrice = totalItems.price;
      console.log(totalPrice);

    }

  }



  // getTotalPrice(): Observable<number> {
  //   return this.behaviorSubject.asObservable().pipe(
  //     map(books => books.reduce((total, book) => total + (book.price * book.quantity), 0))
  //   );
  // }




  // getTotalPrice(): Observable<number>{
  //   return this.behaviorSubject.asObservable().
  // }
}
