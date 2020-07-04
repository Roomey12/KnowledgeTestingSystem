import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  userId: string;
  userDetails;
  userTests;
  password: ChangePassword;
  pas1: string = "oldpass";
  pas2: string = "newpass";
  pas3: string = "confpass";

  constructor(private userTestService: UserTestService, public userService: UserService, 
              private toastr: ToastrService, activeRoute: ActivatedRoute) {
    this.userId = activeRoute.snapshot.params["id"];
  }

  ngOnInit() {
    if(!this.userId){
      this.userService.usernameModel.reset();
      this.userService.passwordModel.reset();
      this.loadUserProfile();
    }
    else{
      this.loadStrangeUserProfile();
    }
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
  }

  showChangeUsername(){
    this.userService.usernameModel.reset();
  }

  showChangeEmail(){
    this.userService.newEmailModel.reset();
  }
  
  changePassword(){
    this.userService.changePassword(this.userDetails["id"]).subscribe(
      (res: any) => {
        console.log(res);
        if (res.succeeded) {
          this.userService.passwordModel.reset();
          this.toastr.success('Пароль был изменен.', 'Успешно.');
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

  changeEmail(){
    this.userService.changeEmail(this.userDetails["email"]).subscribe(
      data => {
        this.userService.newEmailModel.reset();
        this.toastr.success('Для продолжения, перейдите по ссылке, которая была отправлена на указаную почту.', 'Успешно.');
      },
      err => {
        if(err.error == "User with this email already exists"){
          this.toastr.error("Данная почта уже занята.","Безуспешно.")
        }
      }
    )
  }

  changeUsername(){
    this.userService.changeUsername(this.userDetails.userName).subscribe(
      data => {
        this.loadUserProfile();
        this.userService.usernameModel.reset();
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

  changeProfileImage(){
    var profileImageUrl = (document.getElementById("profileImageUrl") as HTMLInputElement).value;
    this.userService.changeProfileImage(this.userDetails.email, profileImageUrl).subscribe(
      data => {
        this.loadUserProfile();
        (document.getElementById("profileImageUrl") as HTMLInputElement).value = "";
        this.toastr.success('Аватар был изменен', 'Успешно.');
      },
      err => {
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

  loadStrangeUserProfile(){
    this.userService.getUser(this.userId).subscribe(
      data => {
        this.userDetails = data;
        this.loadUserTests();
      }
    )
  }
}
