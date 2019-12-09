import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  @Input() book : Book = {
    id: 5,
    name: "Libro 1",
    author: "Autor 1",
  }

  constructor() { }

  ngOnInit() {
  }

}
