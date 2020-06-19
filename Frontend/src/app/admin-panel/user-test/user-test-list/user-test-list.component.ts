import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTestService } from 'src/app/services/usertest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-test-list',
  templateUrl: './user-test-list.component.html',
  styles: []
})

export class UserTestListComponent implements OnInit {

  userTests: object[];
  constructor(private router: Router, private toastr: ToastrService, private userTestService: UserTestService) { }

  ngOnInit() {
    this.loadUserTests();
  }

  loadUserTests(){
    this.userTestService.getAllUserTests()
        .subscribe((data: object[]) => {
          this.userTests = data;
        });
  }

  deleteUserTest(id: string) {
    var result = confirm("Вы уверены что хотите удалить этот результат?");
    if(result == true){
      this.userTestService.deleteUserTest(id).subscribe(data => this.loadUserTests());
      this.toastr.success("Результат прохождения теста был удален.", "Успешно.")
    }
  } 
}
