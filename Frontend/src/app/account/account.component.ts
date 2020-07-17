import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserTestService } from '../services/usertest.service';
import { UserService } from '../services/user.service';
import { ChangePassword } from '../models/changePassword';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

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

  constructor(private userTestService: UserTestService, public accountService: AccountService, 
              private toastr: ToastrService, private userService: UserService, activeRoute: ActivatedRoute) {
    this.userId = activeRoute.snapshot.params["id"];
  }

  ngOnInit() {
    if(!this.userId){
      this.accountService.usernameModel.reset();
      this.accountService.passwordModel.reset();
      this.loadUserProfile();
    }
    else{
      this.loadStrangeUserProfile();
    }
  }

  loadUserProfile(){
    this.accountService.getUserProfile().subscribe(
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
    this.accountService.passwordModel.reset(); 
  }

  showChangeUsername(){
    this.accountService.usernameModel.reset();
  }

  showChangeEmail(){
    this.accountService.newEmailModel.reset();
  }
  
  changePassword(){
    this.accountService.changePassword(this.userDetails["id"]).subscribe(
      (res: any) => {
        console.log(res);
        if (res.succeeded) {
          this.accountService.passwordModel.reset();
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
    this.accountService.changeEmail(this.userDetails["email"]).subscribe(
      data => {
        this.accountService.newEmailModel.reset();
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
    this.accountService.changeUsername(this.userDetails.userName).subscribe(
      data => {
        this.loadUserProfile();
        this.accountService.usernameModel.reset();
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
    var img = document.createElement("img");
    img.src = profileImageUrl;
    img.onerror = () => {
      this.toastr.error("Ссылка на картинку недействительна.", "Безуспешно.");
    }
    img.onload = () => {
      this.accountService.changeProfileImage(this.userDetails.email, profileImageUrl).subscribe(
        data => {
          this.loadUserProfile();
          (document.getElementById("profileImageUrl") as HTMLInputElement).value = "";
          this.toastr.success('Аватар был изменен', 'Успешно.');
        },
        err => {
          this.toastr.error('Что-то пошло не так.','Безуспешно.');
        }
      );
    }
  }

  changeAboutMe(){
    let aboutMe = (document.getElementById("aboutMe") as HTMLInputElement).value;
    if(aboutMe.length > 50){
      this.toastr.error('Максимальная длина информации 50 символов.','Безуспешно.');
    }
    else{
      this.accountService.changeAboutMe(this.userDetails.email, aboutMe).subscribe(
        data => {
          this.loadUserProfile();
          (document.getElementById("aboutMe") as HTMLInputElement).value = "";
          this.toastr.success('Информация `О себе была` изменена.', 'Успешно.');
        },
        err => {
          this.toastr.error('Что-то пошло не так.','Безуспешно.');
        }
      );
    }
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
