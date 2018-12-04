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
      .subscribe(books=> this.books = books.filter(x=> x.inCart === false));
  }

  getCart(): void {
    this.bookService.getBooks()
      .subscribe(books=> {
        this.cart = books.filter(x=>x.inCart === true);
        this.setTotal();
      });
  }

  setTotal(): void {
    if (this.cart){
      this.total = this.cart.reduce((acc, add) => acc + add.price,0);
    } else {
      this.total = 0;
    }
  }

  updateBooks(id): void {
    this.bookService.addToCart(id)
      .subscribe(() => {
        this.getBooks();
        this.getCart();
        this.setTotal();
      })
  }

  removeBook(id): void {
    this.bookService.removeFromCart(id)
      .subscribe(() => {
        this.getBooks();
        this.getCart();
        this.setTotal();
      })
  }

  books: Book[];
  cart: Book[];
  total: number;

  ngOnInit() {
    this.setTotal();
    this.getBooks();
    this.getCart();
  }

}
