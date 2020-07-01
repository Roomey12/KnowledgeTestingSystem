import { UserTestService } from '../services/usertest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../models/test';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  previousTests: Test[];
  pageNumber: number = 1;
  tests: Test[]; 
  userTests;

  constructor(private router: Router, private userTestService: UserTestService, private testService: TestService) { }

  ngOnInit() {
    this.loadTests();
    this.loadUserTests();
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
  
  loadUserTests(){
    this.userTestService.getTopUserTests(10)
      .subscribe((data: object[]) =>{
         this.userTests = data;
      })
  }

  loadTestsByTitle(){
    setTimeout(() => {
      if(this.title == ""){
        this.loadTests();
      }
      else{
        this.testService.getTestsByTitle(this.title).subscribe((data: Test[]) => {
          this.tests = data;
        })
      }
    }, 0);
  }
}