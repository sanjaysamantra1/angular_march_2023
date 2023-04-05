import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css'],
})
export class ModelDrivenFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    firstname: new FormControl('sachin',[Validators.required,Validators.minLength(5)]),
    lastname: new FormControl('Tendulkar'),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      pin: new FormControl(''),
    }),
  });
}
