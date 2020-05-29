import { Component, OnInit } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
import { Router } from '@angular/router';
import { UserTestService } from 'src/app/services/usertest.service';

@Component({
  selector: 'app-user-test-list',
  templateUrl: './user-test-list.component.html',
  styles: []
})
export class UserTestListComponent implements OnInit {

  userTests: object[];
  constructor(private router: Router, private userTestService: UserTestService) { }

  ngOnInit() {
    this.loadUserTests();
  }

  loadUserTests(){
    this.userTestService.getAllUserTests()
        .subscribe((data: object[]) => {
          console.log(data);
          this.userTests = data;
        });
  }

  deleteUserTest(id: string) {
    var result = confirm("Вы уверены что хотите удалить этот результат?");
    if(result == true){
      this.userTestService.deleteUserTest(id).subscribe(data => this.loadUserTests());
    }
  } 
}
