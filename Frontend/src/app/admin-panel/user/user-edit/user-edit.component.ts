import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserTestService } from 'src/app/services/usertest.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserFormComponent } from '../user-form/user-form.component';

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

  constructor(private userService: UserService, public userForm: UserFormComponent,
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

  saveUser() {
    if(this.user.Email != null || this.user.UserName != null){
      this.userService.putUser(this.user)
        .subscribe(data => { 
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
}
