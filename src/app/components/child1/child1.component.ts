import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['a'],
  outputs: ['nameEvent']
})
export class Child1Component implements OnInit {
  a: any;
  b: number = 20;
  name: string = 'Sachin Tendulkar';

  nameEvent = new EventEmitter();
  sendDataToParent(){
    this.nameEvent.emit(this.name);
  }

  constructor() {}

  ngOnInit(): void {}
}
