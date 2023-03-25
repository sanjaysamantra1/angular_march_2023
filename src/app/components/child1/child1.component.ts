import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['a']
})
export class Child1Component implements OnInit {
  a:any;

  constructor() { }

  ngOnInit(): void {
  }

}
