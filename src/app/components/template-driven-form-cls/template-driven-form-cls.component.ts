import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-2',
  templateUrl: './template-driven-form-cls.component.html',
  styleUrls: ['./template-driven-form-cls.component.css'],
})
export class TemplateDrivenFormClsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  submitMyForm(user: any) {
    alert(`Name: ${user.name} Age: ${user.age}`);
  }
  user: any = { name: 'sanjay', age: 44, gender:'male' };
}
