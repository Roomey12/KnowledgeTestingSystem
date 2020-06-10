import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTestService } from '../services/usertest.service';
import { UserService } from '../services/user.service';
import { ChangePassword } from '../models/changePassword';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']

})
export class AccountComponent implements OnInit {

  userDetails;
  userTests;
  showChangePass: boolean = false;
  showChangeName: boolean = false;
  password: ChangePassword;
  pas1: string = "oldpass";
  pas2: string = "newpass";
  pas3: string = "confpass";


  constructor(private userTestService: UserTestService, public userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.usernameModel.reset();
    this.userService.passwordModel.reset(); 
    this.loadUserProfile();
  }

  loadUserProfile(){
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
    this.userService.passwordModel.reset(); 
    this.showChangePass = !this.showChangePass;
  }

  showChangeUsername(){
    this.userService.usernameModel.reset();
    this.showChangeName = !this.showChangeName;
  }

  changePassword(){
    this.userService.changePassword(this.userDetails["id"]).subscribe(
      (res: any) => {
        console.log(res);
        if (res.succeeded) {
          this.userService.passwordModel.reset();
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

  changeUsername(){
    this.userService.changeUsername(this.userDetails.userName).subscribe(
      data => {
        this.loadUserProfile();
        this.userService.usernameModel.reset();
        this.showChangeName = false;
        this.toastr.success('Имя пользователя было изменено.', 'Успешно.');
      },
      err => {
        if (err.error == "User with this username already exists"){
          this.toastr.error('Пользователь с таким именем уже существует.', 'Имя пользователя не было изменено.');
        }
        else if(err.error == "Username can not be the same as current"){
          this.toastr.error('Новое имя пользователя не должно совпадать с текущим.', 'Имя пользователя не было изменено.');
        }
        console.log(err);
      }
    );
  }

  show_hide_password(el){
    if(el == "oldpass"){
      var input = document.getElementById('old-password');
      var eye = document.getElementById('old-passeye');
    }
    else if(el == "newpass"){
      var input = document.getElementById('new-password');
      var eye = document.getElementById('new-passeye');
    }
    else{
      var input = document.getElementById('conf-password');
      var eye = document.getElementById('conf-passeye');
    }
    if (input.getAttribute('type') == 'password') {
      eye.classList.add('view');
      input.setAttribute('type', 'text');
    } else {
      eye.classList.remove('view');
      input.setAttribute('type', 'password');
    }
    return false;
  }
}
