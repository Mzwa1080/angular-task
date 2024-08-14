import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  booklist = [ {
    id: 1,
    name : 'Clean Code',
    author : 'Uncle Robert C Martin',
    src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
    price : 399.98

  },
  {
    id: 2,
    name : "Pragmatic Programmer",
    author : "David Thomas",
    src  : 'https://m.media-amazon.com/images/I/61ztlXgCmpL._SY342_.jpg',
    price : 129.99
  },
  {
    id: 3,
    name : "Pragmatic Programmer",
    author : "David Thomas",
    src  : 'https://m.media-amazon.com/images/I/61ztlXgCmpL._SY342_.jpg',
    price : 129.99
  },
  {
    id:4,
    name : 'Clean Code',
    author : 'Uncle Robert C Martin',
    src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
    price : 399.98

  },
  {
    id:5,
    name : 'Clean Code',
    author : 'Uncle Robert C Martin',
    src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
    price : 399.98

  },
  {
    id:6,
    name : 'Clean Code',
    author : 'Uncle Robert C Martin',
    src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
    price : 399.98

  },
  {
    id:7,
    name : 'Clean Code',
    author : 'Uncle Robert C Martin',
    src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
    price : 399.98

  },
  {
    id:8,
    name : 'Clean Code',
    author : 'Uncle Robert C Martin',
    src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
    price : 399.98

  }
]
  
  getBooks()  {
    return  this.booklist
    
  }

  getBookById(id : number){
    return this.booklist.find((book) => book.id == id)
  }

// addBookToTheCart(singleBook : BooksService){
    
//    this.booklist.push(singleBook)
// }

  
}


