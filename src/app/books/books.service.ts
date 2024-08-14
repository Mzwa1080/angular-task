import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  booklist: Book[] = [ {
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
    name : " Ace Computer Science and Coding",
    author : "Workman Publishing",
    src  : 'https://m.media-amazon.com/images/I/51sxPK18QvL._SY445_SX342_.jpg',
    price : 471.86
  },
  {
    id:4,
    name : 'Coding for Beginners: Using Python',
    author : ' Louie Stowell',
    src : 'https://m.media-amazon.com/images/I/91XSUk7ZxrL._SY466_.jpg',
    price : 169.00

  },
  {
    id:5,
    name : 'ICD-10-CM 2024 The Complete Official Codebook',
    author : ' American Medical Association',
    src : 'https://m.media-amazon.com/images/I/41J2SYFekKL._SX342_SY445_.jpg',
    price : 3293.82

  },
  {
    id:6,
    name : 'Web Design with HTML, CSS, JavaScript and jQuery Set',
    author : ' Jon Duckett',
    src : 'https://m.media-amazon.com/images/I/811a1DHT8OL._SY466_.jpg',
    price : 1213.00

  },
  {
    id:7,
    name : 'Introduction to Algorithms, fourth edition',
    author : ' Thomas H. Cormen',
    src : 'https://m.media-amazon.com/images/I/41+aXH4mDbL._SX342_SY445_.jpg',
    price : 399.98

  },
  {
    id:8,
    name : 'Learn CSS in One Day and Learn It Well',
    author : 'Jamie Chan',
    src : 'https://m.media-amazon.com/images/I/611x-ANjEFL._SY466_.jpg',
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


