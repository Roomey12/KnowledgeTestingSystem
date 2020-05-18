import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from '../models/test';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styles: []
})
export class TestFormComponent implements OnInit {

  test: Test;
  loaded: boolean = false;

  constructor(private testService: TestService, private router: Router, activeRoute: ActivatedRoute) {
    this.test = new Test();
    this.test.testId= Number.parseInt(activeRoute.snapshot.params["id"]);
  }

  ngOnInit() {
    this.getTest();
  }

  getTest() {
    this.testService.getTestById(this.test.testId)
        .subscribe((data: Test) => {
          this.test = data;
          this.test.maxTime = new Date(data["maxTime"]);
          if(this.test != null){
            this.loaded = true;
          }
          console.log(this.test.maxTime.getMinutes());
        })
  }
}
