import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  addBooks: Book[] = []
  behaviorSubject = new BehaviorSubject<Book[]>([]);


  constructor() { }




  add(book: Book) {
    const currentValue = this.behaviorSubject.value.find(x => x.id === book.id);
    if (!currentValue) {
      const updatedBooks = [...this.behaviorSubject.value, { ...book, quantity: 1 }];
      this.behaviorSubject.next(updatedBooks)

      const newTotalPrice = this.getTotalQuantity(updatedBooks);
      this.updatePriceInLocalStorage(newTotalPrice);

    } else {
      const updatedBooks = this.behaviorSubject.value.map(b =>
        b.id === book.id ? { ...b, quantity: b.quantity + 1 } : b);
      this.behaviorSubject.next(updatedBooks);

       const newTotalPrice = this.getTotalQuantity(updatedBooks);
    this.updatePriceInLocalStorage(newTotalPrice);
    }

    localStorage.setItem('Cart-Items', JSON.stringify(this.behaviorSubject.value))
    
    console.log(this.behaviorSubject.value);
  }

  getBooksFromLocalStorageForCart() {
    return localStorage.getItem('Cart-Items')
  }
  getTotalAmountFromStorage() {
    return localStorage.getItem('Total-Amount')
  }

  subtract(book: Book) {
    const currentValue = this.behaviorSubject.value.find(x => x.id === book.id);

    if (currentValue && currentValue.quantity > 1) {
      const updatedBooks = this.behaviorSubject.value.map(b =>
        b.id === book.id ? { ...b, quantity: b.quantity - 1 } : b
      );
      localStorage.setItem('Cart-Items', JSON.stringify(updatedBooks));
      this.updatePriceInLocalStorage(currentValue.price)
      this.behaviorSubject.next(updatedBooks);
      
      // const totalAmount = this.getTotalQuantity(updatedBooks);

    } else if (currentValue && (currentValue.quantity === 1 || currentValue.quantity === 0)) {
      const updatedBooks = this.behaviorSubject.value.filter(b => b.id !== book.id);
      this.behaviorSubject.next(updatedBooks);
      this.updatePriceInLocalStorage(currentValue.price)

      if (updatedBooks.length > 0) {
        localStorage.setItem('Cart-Items', JSON.stringify(updatedBooks));
      } else {
        localStorage.removeItem('Cart-Items');
        window.location.reload();
      }
    }

    // console.log(this.behaviorSubject.value);
  }
  updatePriceInLocalStorage(totalAmout : number){
    return localStorage.setItem('Total-Amount', JSON.stringify(totalAmout) )
  }
  updateQuantityLocalStorage(){

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
    return this.getCartItems().pipe(
      map(bookPrice => bookPrice.reduce(((total, book) => total + (book.price * book.quantity)), 0))
    );
  }




}



