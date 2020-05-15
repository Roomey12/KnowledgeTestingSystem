import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers()
        .subscribe((data: User[]) => {
          this.users = data;
        });
  }

  delete(id: string) {
    var result = confirm("Вы уверены что хотите удалить этого пользователя?");
    if(result == true){
      this.userService.deleteUser(id).subscribe(data => this.loadUsers());
    }
  } 
}
