import { Component, OnInit, Input } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';

@Component({
  selector: 'user-test-form-ut',
  templateUrl: './user-test-form-ut.component.html',
  styles: [
  ]
})
export class UserTestFormUTComponent implements OnInit {

  @Input() userTest: TestResult;
  
  constructor() { }

  ngOnInit(): void {
  }

}
