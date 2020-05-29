import { Component, OnInit } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
import { UserTestService } from 'src/app/services/usertest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-test-create',
  templateUrl: './user-test-create.component.html',
  styles: []
})
export class UserTestCreateComponent implements OnInit {

  userTest;
  
  constructor(private userTestService: UserTestService, private router: Router, activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.userTest = new TestResult();
  }

  create(){
    let testResult = new TestResult();
    let time = new Date();
    console.log(this.userTest.UserId);
    console.log(this.userTest.TestId);
    let userTestTime = this.userTest.Time.split(":");
    time.setMinutes(userTestTime[0]);
    time.setSeconds(userTestTime[1]);
    time.setMilliseconds(0);
    testResult.UserId = this.userTest.UserId;
    testResult.TestId = Number(this.userTest.TestId);
    testResult.Mark = Number(this.userTest.Mark);
    testResult.Time = time;
    console.log(testResult);
    this.userTestService.postTestResult(testResult).subscribe(data => this.router.navigateByUrl("/admin-panel")),
      error => {
      console.log(error);
    };
  }
}
