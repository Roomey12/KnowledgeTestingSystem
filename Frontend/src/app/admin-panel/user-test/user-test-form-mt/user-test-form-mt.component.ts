import { Component, OnInit, Input } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
import { UserTestService } from 'src/app/services/usertest.service';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'user-test-form-mt',
  templateUrl: './user-test-form-mt.component.html',
  styles: [
  ]
})
export class UserTestFormMTComponent implements OnInit {

  @Input() userTest: TestResult;

  constructor(public userTestService: UserTestService) { }

  ngOnInit(): void {
  }
}
