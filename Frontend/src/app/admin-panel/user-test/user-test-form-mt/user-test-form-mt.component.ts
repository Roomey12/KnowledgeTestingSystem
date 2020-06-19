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

  constructor(private fb: FormBuilder, public userTestService: UserTestService) { }

  userTestModel = this.fb.group({
    Mark: ['', [this.markRangeValidator]],
    Time: ['', Validators.pattern('[0-5][0-9][:][0-5][0-9]')]
  });

  ngOnInit(): void {
    this.userTestModel.reset();
  }
  
  markRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 100)) {
        return { 'markRange': true };
    }
    return null;
  }
}
