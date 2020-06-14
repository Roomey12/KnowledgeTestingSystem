import { Component, OnInit } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
import { UserTestService } from 'src/app/services/usertest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(public userTestService: UserTestService, private router: Router, activeRoute: ActivatedRoute, private toastr: ToastrService) {
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
      this.toastr.success("Результат был изменен.","Успешно.")
      this.router.navigateByUrl("/admin-panel");
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
