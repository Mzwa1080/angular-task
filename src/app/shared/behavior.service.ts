import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  
  cartItems: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  addBooks: Book[] = []
  
  constructor() { }
  behaviorSubject = new BehaviorSubject<Book[]>([]);

    add(book: Book) {
    const currentValue = this.behaviorSubject.value.find(x => x.id === book.id);
    if (!currentValue) {
      this.behaviorSubject.next([...this.behaviorSubject.value, { ...book, quantity: 1 }]);
    } else {
      const updatedBooks = this.behaviorSubject.value.map(b => 
        b.id === book.id ? { ...b, quantity: b.quantity + 1 } : b  );
      this.behaviorSubject.next(updatedBooks);
    }
    console.log(this.behaviorSubject.value);
  }
  

    subtract(book: Book) {
    const currentValue = this.behaviorSubject.value.find(x => x.id === book.id);
    if (currentValue && currentValue.quantity > 1) {
      const updatedBooks = this.behaviorSubject.value.map(b =>
        b.id === book.id ? { ...b, quantity: b.quantity - 1 } : b
      );
      this.behaviorSubject.next(updatedBooks);
    } else if (currentValue && currentValue.quantity === 1) {
      const updatedBooks = this.behaviorSubject.value.filter(b => b.id !== book.id);
      this.behaviorSubject.next(updatedBooks);
    }
    console.log(this.behaviorSubject.value);
  }

  getItems() {
    return this.behaviorSubject.asObservable();
  }
  getCartItems = (): Observable<Book[]> => {
    return this.cartItems.asObservable();
  }

  getTotalQuantity(): Observable<number> {
    return this.behaviorSubject.asObservable().pipe(
      map(books => books.reduce((total, book) => total + (book.quantity || 0), 0))
    );
  }

}
