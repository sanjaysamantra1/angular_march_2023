import { Component, OnInit } from '@angular/core';
import { productArr } from './product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = productArr;
  p: any;
  searchText: any;

  constructor() {}

  ngOnInit(): void {}

  sortAsc() {
    this.products.sort((p1, p2) => p1.price - p2.price);
  }
  sortDesc() {
    this.products.sort((p1, p2) => p2.price - p1.price);
  }

  selectedProduct: any;
  displayStyle = 'none';
  openPopup(product: any) {
    this.selectedProduct = product;
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

}
