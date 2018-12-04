import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../book-list'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  books = BOOKS.filter(x=> x.inCart === true);

  ngOnInit() {
  }

}
