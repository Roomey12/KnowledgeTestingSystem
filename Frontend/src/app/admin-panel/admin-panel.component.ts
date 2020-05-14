import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styles: [] 
})
export class AdminPanelComponent implements OnInit {

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
}
