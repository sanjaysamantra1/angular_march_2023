import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  a: number = 10;
  myName: string = '';

  getDataFromChild(name: string) {
    this.myName = name;
  }
}
