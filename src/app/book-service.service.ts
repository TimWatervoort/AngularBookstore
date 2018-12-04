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

  private booksUrl = 'http://localhost:8082/api/books'

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
  }


}
