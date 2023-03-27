import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css'],
})
export class Emp2Component implements OnInit {
  
  constructor(private empService: EmpService) {}

  ngOnInit(): void {}

  addEmp() {
    this.empService.employees.push({
      eId: 106,
      name: 'Varun',
      sal: 8500,
      gender: 'male',
    });
  }
}
