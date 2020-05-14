import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: []
})
export class UserEditComponent implements OnInit {

  id: string;
  user: User;    // изменяемый объект
  loaded: boolean = false;

  constructor(private adminService: AdminService, private router: Router, activeRoute: ActivatedRoute) {
      this.id = activeRoute.snapshot.params["id"];
  }

  ngOnInit() {
      if (this.id)
          this.adminService.getUser(this.id)
              .subscribe((data: User) => {
                  this.user = data;
                  console.log(this.user);
                  if (this.user != null) this.loaded = true;
              });
  }

  save() {
      this.adminService.putUser(this.user).subscribe(data => this.router.navigateByUrl("/admin-panel"));
  }
}
