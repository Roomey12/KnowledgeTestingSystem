import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: []
})
export class TestCreateComponent implements OnInit {

  test: Test;
  constructor(private testService: TestService, private router: Router) { }

  ngOnInit(): void {
    this.test = new Test;
  }

  create(){
    this.test.maxScore = Number(this.test.maxScore);
    this.test.maxTime = new Date(this.test.maxTime);
    this.testService.createTest(this.test).subscribe(data => this.router.navigateByUrl("/admin-panel")),
      error => {
      console.log(error);
    };
  }
}
