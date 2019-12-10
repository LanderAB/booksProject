import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/book";
import { BookService } from "../bookService";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  @Input() book: Book = {
    id: 5,
    name: "Libro 1",
    author: "Autor 1"
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.bookService
      .getBook(id)
      .subscribe(bookRecibido => (this.book = bookRecibido));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.bookService.updateBook(this.book).subscribe(() => this.goBack());
  }

  delete(book : Book): void {
    this.bookService.delete(book).subscribe();
  }
}
