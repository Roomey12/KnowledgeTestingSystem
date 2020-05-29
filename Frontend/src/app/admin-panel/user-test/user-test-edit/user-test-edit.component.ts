import { Component, OnInit } from '@angular/core';
import { UserTestListComponent } from '../user-test-list/user-test-list.component';
import { TestResult } from 'src/app/models/testResult';
import { UserTestService } from 'src/app/services/usertest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-test-edit',
  templateUrl: './user-test-edit.component.html',
  styleUrls: []
})
export class UserTestEditComponent implements OnInit {

  loaded: boolean;
  id;
  userTest;
  constructor(private userTestService: UserTestService, private router: Router, activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params["id"];
  }

  ngOnInit() {
    if (this.id){
        this.loadUserTest();
    }
  }

save() {
  let testResult = new TestResult();
  let time = new Date();
  let userTestTime = this.userTest.Time.split(":");
  time.setMinutes(userTestTime[0]);
  time.setSeconds(userTestTime[1]);
  time.setMilliseconds(0);
  testResult.UserTestId = this.userTest.userTestId;
  testResult.UserId = this.userTest.userId;
  testResult.TestId = this.userTest.testId;
  testResult.Mark = Number(this.userTest.Mark);
  testResult.Time = time;
  console.log(testResult);
  this.userTestService.putUserTest(testResult).subscribe(data => this.router.navigateByUrl("/admin-panel"));
}

  loadUserTest(){
    this.userTestService.getUserTestById(this.id)
      .subscribe((data: object) =>{
        this.userTest = data;
        this.loaded = true;
      })
  }
}
