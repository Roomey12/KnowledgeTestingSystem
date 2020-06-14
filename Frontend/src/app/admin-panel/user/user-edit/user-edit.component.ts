import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserTestService } from 'src/app/services/usertest.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: []
})
export class UserEditComponent implements OnInit {

  id: string;
  user: User;    // изменяемый объект
  loaded: boolean = false;
  userTests;

  constructor(public userService: UserService, private userTestService: UserTestService, private router: Router, activeRoute: ActivatedRoute) {
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
    this.userService.putUser(this.user).subscribe(data => this.router.navigateByUrl("/admin-panel"));
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
    }
  } 
}
