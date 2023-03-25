import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  employees = [
    { id: 101, name: 'sachin', sal: 5000 },
    { id: 102, name: 'ajay', sal: 7000 },
    { id: 103, name: 'deepak', sal: 6000 },
  ];

  addEmployee(emp: any) {
    this.employees.push(emp);
  }
  deleteEmployee(ind: any) {
    this.employees.splice(ind, 1);
  }
}
