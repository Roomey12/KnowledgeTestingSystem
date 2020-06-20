import { Component, OnInit } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
import { UserTestService } from 'src/app/services/usertest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-test-create',
  templateUrl: './user-test-create.component.html',
  styles: []
})
export class UserTestCreateComponent implements OnInit {

  userTest;
  
  constructor(private toastr: ToastrService, private userTestService: UserTestService, private router: Router, activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.userTest = new TestResult();
  }

  create(){
    let testResult = new TestResult();

    let time = new Date();
    let userTestTime = this.userTest.Time.split(":");
    time.setMinutes(userTestTime[0]);
    time.setSeconds(userTestTime[1]);
    time.setMilliseconds(0);

    var username = document.getElementById("Username") as HTMLInputElement;
    var testTitle = document.getElementById("TestTitle") as HTMLInputElement;

    testResult.Username = username.value;
    testResult.TestTitle = testTitle.value;
    testResult.Mark = Number(this.userTest.Mark);
    testResult.Time = time;
    this.userTestService.postTestResultByAdmin(testResult)
      .subscribe(data => { 
        this.userTestService.userTestModel.reset();
        this.toastr.success("Результат теста был создан.", "Успешно.");
        this.router.navigateByUrl("/admin-panel")
      },
      err => {
        console.log(err.error);
        console.log(err);
        if(err.error == "User was not found"){
          this.toastr.error("Пользователь с таким именем не был найден.", "Результат теста не был создан.")
        }
        else if(err.error == "Test was not found"){
          this.toastr.error("Тест с таким названием не был найден.", "Результат теста не был создан.")
        }
        else if(err.error == "Test result`s time can not be higher than test`s maximum time"){
          this.toastr.error("Время прохождения теста не может быть больше чем максимально допустимое время теста.", "Результат теста не был создан.")
        }
      });
  }
}
