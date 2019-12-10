import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/book';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksURL = "http://localhost:3000/books"; // URL to web api

  constructor(private httpClient : HttpClient) { }

  getBooks(): Observable<Book[]> {
    console.log("Service - getBooks");
    return this.httpClient.get<Book[]>(this.booksURL);
  }

  getBook(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.booksURL}/${id}`);
  }

  updateBook(book: Book): Observable<any> {
    console.log("Update book - bookService")
    return this.httpClient.put(`${this.booksURL}/${book.id}`, book);
  }

  delete(book: Book): Observable<any> {
    return this.httpClient.delete<Book>(`${this.booksURL}/${book.id}`)
  }
}
