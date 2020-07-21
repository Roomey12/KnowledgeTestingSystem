import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { Test } from 'src/app/models/test';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styles: [
  ]
})
export class TestListComponent implements OnInit {

  previousTests: Test[];
  pageNumber: number = 1;
  tests: Test[];
  constructor(private testService: TestService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loadTests();
  }

  loadTests() {
    this.testService.getTestsForPagination(this.pageNumber).subscribe((data: Test[]) => {
      this.tests = data;
      if(data.length != 0 ){
        this.previousTests = data;
      }
      else{
        this.tests = this.previousTests;
        this.pageNumber--;
      }
    })
  }

  nextPage(){
    this.pageNumber++;
    this.loadTests();
  }

  previousPage(){
    if(this.pageNumber > 1){
      this.pageNumber--;
    }
    this.loadTests();
  }

  delete(id: string) {
    var result = confirm("Вы уверены что хотите удалить этот тест?");
    if(result == true){
      this.testService.deleteTest(id).subscribe(data => { 
        this.pageNumber--;
        this.loadTests(); 
        this.toastr.success('Тест был удален.','Успешно.');
      }),
      err => {
        this.toastr.success('Тест не был удален. Что-то пошло не так.','Безуспешно.');
        console.log(err);
      };
    }
  } 
}
