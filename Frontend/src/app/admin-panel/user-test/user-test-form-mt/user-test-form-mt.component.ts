import { Component, OnInit, Input } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';

@Component({
  selector: 'user-test-form-mt',
  templateUrl: './user-test-form-mt.component.html',
  styles: [
  ]
})
export class UserTestFormMTComponent implements OnInit {

  @Input() userTest: TestResult;

  constructor() { }

  ngOnInit(): void {
  }

}
