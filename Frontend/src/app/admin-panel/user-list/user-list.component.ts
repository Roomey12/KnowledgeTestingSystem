import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.adminService.getUsers()
        .subscribe((data: User[]) => {
          this.users = data;
        });
  }

  delete(id: string) {
    var result = confirm("Вы уверены что хотите удалить этого пользователя?");
    if(result == true){
      this.adminService.deleteUser(id).subscribe(data => this.loadUsers());
    }
  } 
}
