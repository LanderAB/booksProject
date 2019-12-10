import { Component, OnInit } from '@angular/core';
import { BookService } from '../bookService';
import { Book } from 'src/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : Book[];

  constructor(private bookService : BookService) { }

  getBooks() : void {
    this.bookService.getBooks().subscribe(
      books => this.books = books
    );
  }

  ngOnInit() {
    console.log("Antes de onInit");
    this.getBooks();
  }

}
