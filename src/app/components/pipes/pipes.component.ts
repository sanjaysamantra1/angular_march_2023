import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'sAcHiN tEnDulKAr';
  mySal: number = 5000;
  today: Date = new Date();
  user: object = { name: 'sachin', age: 45, add: 'mumbai' };
  cars: string[] = ['tata', 'honda', 'maruti', 'hundai', 'toyota', 'chevrolet'];

  msg:string = '';
  num:number = 21;
}
