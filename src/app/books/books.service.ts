import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks()  {
    return  [
      {
      
      name : 'Clean Code',
      author : 'Uncle Robert C Martin',
      src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
      price : 399.98
  
    },
    {
      name : "Pragmatic Programmer",
      author : "David Thomas",
      src  : 'https://m.media-amazon.com/images/I/61ztlXgCmpL._SY342_.jpg',
      price : 129.99
    },
    {
      name : "Pragmatic Programmer",
      author : "David Thomas",
      src  : 'https://m.media-amazon.com/images/I/61ztlXgCmpL._SY342_.jpg',
      price : 129.99
    },
    {
      
      name : 'Clean Code',
      author : 'Uncle Robert C Martin',
      src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
      price : 399.98
  
    },
    {
      
      name : 'Clean Code',
      author : 'Uncle Robert C Martin',
      src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
      price : 399.98
  
    }
  
  ]
    
  }
}


