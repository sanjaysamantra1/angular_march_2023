import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  inputs: ['user'],
})
export class UserCardComponent implements OnInit {
  user: any;
  constructor() {}

  ngOnInit(): void {}
}
