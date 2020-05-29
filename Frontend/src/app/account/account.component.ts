import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTestService } from '../services/usertest.service';
import { UserService } from '../services/user.service';
import { ChangePassword } from '../models/changePassword';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [
  ]
})
export class AccountComponent implements OnInit {

  userDetails;
  userTests;
  showChangePass: boolean = false;
  password: ChangePassword;

  constructor(private userTestService: UserTestService, private userService: UserService, private toastr: ToastrService) { }

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
    this.userTestService.getUserTestsByUserId(this.userDetails["id"])
      .subscribe((data: object[]) =>{
         this.userTests = data;
      })
  }

  showChangePassword(){
    this.showChangePass = true;
  }

  changePassword(){
    this.password = new ChangePassword();
    this.password.UserId = this.userDetails["id"];
    this.password.OldPassword = (document.getElementById("OldPassword") as HTMLInputElement).value;
    this.password.NewPassword = (document.getElementById("NewPassword") as HTMLInputElement).value;
    this.userService.changePassword(this.password).subscribe(data => { 
      this.showChangePass = false;
      this.toastr.success('Пароль был изменен!', 'Успешно!');
    });
  }
}
