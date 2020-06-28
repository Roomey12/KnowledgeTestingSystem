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

  previousUserTests: object[];
  userTests: object[];
  pageNumber: number = 1;
  constructor(private router: Router, private toastr: ToastrService, private userTestService: UserTestService) { }

  ngOnInit() {
    this.loadUserTests();
  }

  loadUserTests(){
    // this.userTestService.getAllUserTests()
    //     .subscribe((data: object[]) => {
    //       this.userTests = data;
    //     });
    this.userTestService.getUserTestsForPagination(this.pageNumber).subscribe((data: object[]) => {
      this.userTests = data;
      if(data.length != 0 ){
        this.previousUserTests = data;
      }
      else{
        this.userTests = this.previousUserTests;
        this.pageNumber--;
      }
    })
  } 

  nextPage(){
    this.pageNumber++;
    this.loadUserTests();
  }

  previousPage(){
    if(this.pageNumber > 1){
      this.pageNumber--;
    }
    this.loadUserTests();
  }

  deleteUserTest(id: string) {
    var result = confirm("Вы уверены что хотите удалить этот результат?");
    if(result == true){
      this.userTestService.deleteUserTest(id).subscribe(data => this.loadUserTests());
      this.toastr.success("Результат прохождения теста был удален.", "Успешно.")
    }
  } 
}
