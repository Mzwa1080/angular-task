import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  cartItems: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  constructor() { }

  getCartItems = (): Observable<Book[]> => {
    return this.cartItems.asObservable();
  }

}
