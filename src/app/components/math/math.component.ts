import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
})
export class MathComponent implements OnInit {
  // Dependency Injection
  constructor(public mathObj: MathService) {}

  ngOnInit(): void {
    let addResult = this.mathObj.add(2, 3);
    console.log(addResult);

    let subResult = this.mathObj.sub(10, 2);
    console.log(subResult);
  }
}
