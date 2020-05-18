import { UserTestService } from '../services/usertest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../models/test';
import { TestService } from '../services/test.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails;
  tests: Test[];   
  userTests;

  constructor(private router: Router, private userTestService: UserTestService, private testService: TestService, private userService: UserService) { }

  ngOnInit() {
    this.loadTests();
    this.loadUserTests();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  loadTests() {
    this.testService.getTests()
        .subscribe((data: Test[]) => {
            this.tests = data;
        });
  }
  
  loadUserTests(){
    this.userTestService.getUserTests()
      .subscribe((data: object[]) =>{
         this.userTests = data;
      })
  }
}