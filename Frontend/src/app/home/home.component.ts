import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../models/test';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  userDetails;
  tests: Test[];   
  userTests;

  constructor(private router: Router, private userService: UserService, private testService: TestService) { }

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

    //получаем данные через сервис
  loadTests() {
    this.testService.getTests()
        .subscribe((data: Test[]) => {
            this.tests = data;
        });
  }
  
  loadUserTests(){
    this.userService.getUserTests()
      .subscribe((data: object[]) =>{
         this.userTests = data;
         console.log(data);
      })
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}