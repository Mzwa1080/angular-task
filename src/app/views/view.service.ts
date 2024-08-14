import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
 behaviorSubject = new BehaviorSubject<{ id: number, quantity: number }[]>([]);

  constructor() {}

  add(id : number){
    const currentValue = this.behaviorSubject.value.find(x => x.id === id);
    if (currentValue) {
      this.behaviorSubject.next([...[{ id: currentValue.id, quantity: currentValue.quantity + 1}]]);
    } else {
      this.behaviorSubject.next([...[{ id: id, quantity: 1}]]);
    }
  }

  subtract(id : number){
    const currentValue = this.behaviorSubject.value.find(x => x.id === id);
    if (currentValue) {
      if (currentValue.quantity > 1) {
        this.behaviorSubject.next([...[{ id: currentValue.id, quantity: currentValue.quantity - 1}]]);
      }
    }
  }

  // findValue(id:number){
    
  // }
    

  get() {
    return this.behaviorSubject.asObservable();
  }
}
