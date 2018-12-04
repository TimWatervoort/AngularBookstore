import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books=> this.books = books);
  }

  books: Book[];

  ngOnInit() {
    this.getBooks();
  }

}
