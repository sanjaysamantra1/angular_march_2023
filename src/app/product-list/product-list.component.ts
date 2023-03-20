import { Component, OnInit } from '@angular/core';
import { productArr } from './product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = productArr;

  constructor() { }

  ngOnInit(): void {
  }

}
