import { Component, OnInit } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
import { UserTestService } from 'src/app/services/usertest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserTestFormMTComponent } from '../user-test-form-mt/user-test-form-mt.component';

@Component({
  selector: 'app-user-test-edit',
  templateUrl: './user-test-edit.component.html',
  styleUrls: []
})
export class UserTestEditComponent implements OnInit {

  loaded: boolean;
  id;
  userTest;
  userTestTime;
  userTestMark;
  constructor(public userTestService: UserTestService, activeRoute: ActivatedRoute, private toastr: ToastrService) {
    this.id = activeRoute.snapshot.params["id"];
  }

  ngOnInit() {
    if (this.id){
        this.loadUserTest();
    }
  }

  save() {
    if(this.userTest.Time != null || this.userTest.Mark != null){
      let testResult = new TestResult();
      let time = new Date();
      if(this.userTest.Time != null){
        let userTestTime = this.userTest.Time.split(":");
        time.setMinutes(userTestTime[0]);
        time.setSeconds(userTestTime[1]);
        time.setMilliseconds(0);
        testResult.Time = time;
      }
      else{
        testResult.Time = this.userTestTime;
      }
      if(this.userTest.Mark != null){
        testResult.Mark = Number(this.userTest.Mark);
      }
      else{
        testResult.Mark = this.userTestMark;
      }
      testResult.UserTestId = this.userTest.userTestId;
      testResult.UserId = this.userTest.userId;
      testResult.TestId = this.userTest.testId;
      this.userTestService.putUserTest(testResult).subscribe(data => {
        this.userTestService.userTestModel.reset();
        this.toastr.success("Данные о результате теста были изменены.","Успешно.");
        this.loadUserTest();
      },
      err => {
        if(err.error == "Test result`s time can not be higher than test`s maximum time"){
          this.toastr.error("Время прохождения теста не может быть больше чем максимально допустимое время теста.", "Результат теста не был создан.")
        }
      });
    }
    else{ 
      this.toastr.error("Введите данные для результата теста.", "Безуспешно.");
    }
  }

  loadUserTest(){
    this.userTestService.getUserTestById(this.id)
      .subscribe((data: object) =>{
        this.userTestTime = data["time"];
        this.userTestMark = data["mark"];
        this.userTest = data;
        this.loaded = true;
      })
  }
}
