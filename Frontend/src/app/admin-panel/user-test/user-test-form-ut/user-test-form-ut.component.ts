import { Component, OnInit, Input } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
import { UserTestService } from 'src/app/services/usertest.service';

@Component({
  selector: 'user-test-form-ut',
  templateUrl: './user-test-form-ut.component.html',
  styles: [
  ]
})
export class UserTestFormUTComponent implements OnInit {

  @Input() userTest: TestResult;
  
  constructor(public userTestService: UserTestService) { }

  ngOnInit(): void {
  }

}
