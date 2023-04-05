import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prod: any;

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const prodId = +params['id'];
      this.http.get(`https://fakestoreapi.com/products/${prodId}`).subscribe((response) => {
        this.prod = response;
      })
    });
  }
}
