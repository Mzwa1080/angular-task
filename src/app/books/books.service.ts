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
    description : 'Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. "Uncle Bob" Martin shows how to bring greater professionalism and discipline to application architecture and design.',
    src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY342_.jpg',
    price : 399.98,
    quantity: 1
  },
  {
    id: 2,
    name : "Pragmatic Programmer",
    author : "David Thomas",
    description : 'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users.',
    src  : 'https://m.media-amazon.com/images/I/61ztlXgCmpL._SY342_.jpg',
    price : 129.99,
    quantity: 1

  },
  {
    id: 3,
    name : " Ace Computer Science and Coding",
    author : "Workman Publishing",
    description : 'This Big Fat Notebook makes it all "sink in" with key concepts, mnemonic devices, definitions, diagrams, and doodles to help you understand computer science.',
    src  : 'https://m.media-amazon.com/images/I/51sxPK18QvL._SY445_SX342_.jpg',
    price : 471.86,
    quantity: 1

  },
  {
    id:4,
    name : 'Coding for Beginners: Using Python',
    author : ' Louie Stowell',
    description : 'A beginner’s guide to coding using Python, one of the most popular computer languages. Step-by-step instructions show how to get started and write a simple program. New commands are introduced with examples and colourful pictures so by the end of the book, readers can code games, drawings and more. Includes extra help and downloads online.',
    src : 'https://m.media-amazon.com/images/I/91XSUk7ZxrL._SY466_.jpg',
    price : 169.00,
    quantity: 1

  },
  {
    id:5,
    name : 'ICD-10-CM 2024 The Complete Official Codebook',
    author : ' American Medical Association',
    description : 'The Complete Official Codebook provides the entire updated code set for diagnostic coding, organized to make the challenge of accurate coding easier. This codebook is the cornerstone for establishing medical necessity, correct documentation, determining coverage and ensuring appropriate reimbursement.' ,
    src : 'https://m.media-amazon.com/images/I/41J2SYFekKL._SX342_SY445_.jpg',
    price : 3293.82,
    quantity: 1

  },
  {
    id:6,
    name : 'Web Design with HTML, CSS, JavaScript and jQuery Set',
    author : ' Jon Duckett',
    description : 'This two-book set combines the titles HTML & CSS: Designing and Building Web Sites and JavaScript & jQuery: Interactive Front-End Development. Together these two books form an ideal platform for anyone who wants to master HTML and CSS before stepping up to JavaScript and jQuery.',
    src : 'https://m.media-amazon.com/images/I/811a1DHT8OL._SY466_.jpg',
    price : 1213.00,
    quantity: 1

  },
  {
    id:7,
    name : 'Introduction to Algorithms, fourth edition',
    author : ' Thomas H. Cormen',
    description : 'The leading introductory textbook and reference on algorithms.',
    src : 'https://m.media-amazon.com/images/I/41+aXH4mDbL._SX342_SY445_.jpg',
    price : 399.98,
    quantity: 1

  },
  {
    id:8,
    name : 'Learn CSS in One Day and Learn It Well',
    author : 'Jamie Chan',
    description : 'You no longer have to waste your time and money learning HTML and CSS from lengthy books, expensive online courses or complicated tutorials. Nor do you have to spend money buying expensive website themes.',
    src : 'https://m.media-amazon.com/images/I/611x-ANjEFL._SY466_.jpg',
    price : 399.98,
    quantity: 1

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


