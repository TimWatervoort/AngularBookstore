import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './book-list'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  private booksUrl = 'http://localhost:8082/api/books';

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
  }

  addToCart(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.patch(`${this.booksUrl}/cart/add/${id}`, httpOptions);
  }

  removeFromCart(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.patch(`${this.booksUrl}/cart/remove/${id}`, httpOptions);
  }

}
