import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: ['input{border:1px solid blue;}'],
  styleUrls: ['./databinding.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userName: string = 'Sachin Tendulkar';
  img_url = 'assets/images/mobiles.png';
  flag = false;
  msg = '';
  n1 = 0;
  n2 = 0;

  f1() {
    alert('This is f1....');
  }
  addition(a: any, b: any) {
    alert(`Addition of ${a} and ${b} is ${+a + +b} `);
  }
}
