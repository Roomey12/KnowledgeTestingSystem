import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styles: [] 
})
export class AdminPanelComponent implements OnInit {

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
}
