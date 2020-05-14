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

  constructor(private router: Router, private service: UserService, private testService: TestService) { }

  ngOnInit() {
    this.loadProducts();
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

    //получаем данные через сервис
  loadProducts() {
    this.testService.getTests()
        .subscribe((data: Test[]) => {
            this.tests = data;
        });
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}