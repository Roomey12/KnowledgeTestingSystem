import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserTestService } from 'src/app/services/usertest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: []
})
export class UserEditComponent implements OnInit {

  id: string;
  user: User;
  loaded: boolean = false;
  userTests;

  constructor(public userService: UserService,
              private userTestService: UserTestService, private router: Router, 
              private toastr: ToastrService, activeRoute: ActivatedRoute) { 
      this.id = activeRoute.snapshot.params["id"];
  }
  
  ngOnInit() {
    if (this.id){
        this.userService.getUser(this.id)
            .subscribe((data: User) => {
                this.user = data;
                if (this.user != null) {
                    this.loaded = true;
                }
            });
        this.loadUserTests();
    }
  }

  onSubmit() {
    var img = document.createElement("img");
    img.src = this.user.ProfileImageUrl;
    img.onerror = () => {
      if(!this.user.ProfileImageUrl){
        this.saveUser();
      }
      else{
        this.toastr.error("Ссылка на картинку недействительна.", "Безуспешно.");;
      }
    }
    img.onload = () => {
      this.saveUser();
    }
  }

  saveUser(){
    if(this.user.Email != null || this.user.UserName != null || this.user.AboutMe != null || this.user.ProfileImageUrl != null){
      this.userService.putUser(this.user)
        .subscribe(data => { 
          this.userService.emailModel.reset();
          (document.getElementById('Username') as HTMLInputElement).value = "";
          (document.getElementById('AboutMe') as HTMLInputElement).value = "";
          (document.getElementById('ProfileImageUrl') as HTMLInputElement).value = "";
          this.toastr.success("Данные о пользователе были изменены.", "Успешно.")
        });
    }
    else{
      this.toastr.error("Введите новые данные пользователя", "Безуспешно.")
    }
  }

  loadUserTests(){
    this.userTestService.getUserTestsByUserId(this.id)
      .subscribe((data: object[]) =>{
         this.userTests = data;
      })
  }

  deleteTestResult(id: string) {
    var result = confirm("Вы уверены что хотите удалить результат теста?");
    if(result == true){
      this.userTestService.deleteUserTest(id).subscribe(data => this.loadUserTests());
      this.toastr.success("Результат прохождения теста был удален.", "Успешно.")
    }
  } 

  makeUserAdmin(){
    this.userService.makeUserAdmin(this.user)
      .subscribe((res: any) => {
        if (res.succeeded) {
          this.toastr.success('Пользователь назначен администратором.', 'Успешно.');
        } 
        else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'UserAlreadyInRole':
                this.toastr.error('Пользователь уже был назначен администратором.','Безуспешно.');
                break;
              default:
                this.toastr.error(element.description,'Безуспешно.');
                break;
            }
          });
        }
      },
      err => {
        this.toastr.error('Что-то пошло не так.', 'Безуспешно.');
      }
  )}

  makeUserCustomer(){
    this.userService.makeUserCustomer(this.user)
      .subscribe((res: any) => {
        if (res.succeeded) {
          this.toastr.success('Пользователь назначен клиентом.', 'Успешно.');
        } 
        else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'UserAlreadyInRole':
                this.toastr.error('Пользователь уже был назначен клиентом.','Безуспешно.');
                break;
              default:
                this.toastr.error(element.description,'Безуспешно.');
                break;
            }
          });
        }
      },
      err => {
        this.toastr.error('Что-то пошло не так.', 'Безуспешно.');
      }
  )}
}
