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

  constructor(private userTestService: UserTestService, public userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.formModel.reset(); 
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
    this.userService.changePassword(this.userDetails["id"]).subscribe(
      (res: any) => {
        console.log(res);
        if (res.succeeded) {
          this.userService.formModel.reset();
          this.toastr.success('Пароль был изменен.', 'Успешно.');
          this.showChangePass = false;
        } 
        else{
          res.errors.forEach(element => {
            switch (element.code) {
              case 'PasswordMismatch':
                this.toastr.error('Старый пароль введен неверно.','Пароль не был изменен.');
                break;

              default:
              this.toastr.error(element.description,'Пароль не был изменен.');
                break;
            }
          });
        }
      },
      err => {
        if (err.error == "Old and new password are same"){
          this.toastr.error('Старый и новый пароли совпадают.', 'Пароль не был изменен.');
        }
        console.log(err);
      }
    );
  }
}
