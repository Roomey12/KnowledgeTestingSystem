import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styles: []
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void{
    this.emailModel.reset(); 
  }
  
  emailModel = this.fb.group({
    UserEmail: ['', [Validators.email]]
  });
}
