import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  // inputs: ['aa']
})
export class Child2Component implements OnInit {
  @Input() aa: any;
  @Input() child1: any;

  constructor() {}

  ngOnInit(): void {}
}
