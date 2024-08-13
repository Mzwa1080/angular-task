import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { BehaviorService } from '../shared/behavior.service';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService, private readonly behaviorService: BehaviorService){}
  
  ngOnInit(): void {
    this.behaviorService.getCartItems().subscribe({
      next: (response: Book[]): void => {
        console.log(response, 'cart items')
      },
      error: (error):void => {

      },
      complete: (): void => {

      }
    })
  }
    
  
  
  getCart(){
      return this.cartService.get()
    }
}
