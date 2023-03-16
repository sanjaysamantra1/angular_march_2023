import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userName: string = 'Sachin Tendulkar';
  img_url = 'assets/images/mobiles.png';
  flag = false;

  f1() {
    alert('This is f1....');
  }
  addition(a: any, b: any) {
    alert(`Addition of ${a} and ${b} is ${+a + +b} `);
  }
}
