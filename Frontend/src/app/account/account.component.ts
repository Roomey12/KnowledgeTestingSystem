import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [
  ]
})
export class AccountComponent implements OnInit {

  userDetails;
  userTests;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        this.loadUserTests();
      },
      err => {
        console.log(err);
      },
    );
  }

  loadUserTests(){
    this.userService.getUserTestsByUserId(this.userDetails["id"])
      .subscribe((data: object[]) =>{
         this.userTests = data;
         console.log(data);
      })
  }
}
