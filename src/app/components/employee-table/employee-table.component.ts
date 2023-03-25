import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
  inputs: ['employees'],
  outputs: ['delEvent'],
})
export class EmployeeTableComponent implements OnInit {
  employees: any;

  delEvent = new EventEmitter();
  delete(i: any) {
    this.delEvent.emit(i);
  }
  constructor() {}

  ngOnInit(): void {}
}
