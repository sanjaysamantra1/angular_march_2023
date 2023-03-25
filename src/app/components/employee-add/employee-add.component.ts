import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  outputs: ['empEvent'],
})
export class EmployeeAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  empEvent = new EventEmitter();
  sendDataToParent(id: any, name: any, sal: any) {
    this.empEvent.emit({ id, name, sal });
  }
}
