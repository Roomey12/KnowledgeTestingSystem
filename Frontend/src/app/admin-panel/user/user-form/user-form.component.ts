import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styles: []
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  
  constructor(public userService: UserService) { }

  ngOnInit(): void{
    this.userService.emailModel.reset(); 
  }

}
