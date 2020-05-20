import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styles: [
  ]
})
export class TestListComponent implements OnInit {

  tests: Test[];
  constructor(private router: Router, private testService: TestService) { }

  ngOnInit() {
    this.loadTests();
  }

  loadTests() {
    this.testService.getTests()
        .subscribe((data: Test[]) => {
            this.tests = data;
        });
  }

  delete(id: string) {
    var result = confirm("Вы уверены что хотите удалить этот тест?");
    if(result == true){
      this.testService.deleteTest(id).subscribe(data => this.loadTests());
    }
  } 
}
