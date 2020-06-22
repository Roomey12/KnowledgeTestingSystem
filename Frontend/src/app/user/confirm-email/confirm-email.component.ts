import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']

})
export class ConfirmEmailComponent implements OnInit {

  userId: string;
  token: string;
  emailConfirmed: boolean;
  newEmailConfirmed: boolean;
  forNewEmail: boolean;
  newEmail: string;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private authService: AuthService) {
    this.activatedRoute.queryParams.subscribe(params => {
          this.userId = params['userId'];
          this.token = params['token'];
          if(params['newEmail'] != null){
            this.newEmail = params['newEmail'];
            this.forNewEmail = true;
          }
      });
  }

  ngOnInit(): void {
    if(this.forNewEmail){
      this.confirmNewEmail();
    }
    else{
      this.confirmEmail();
    }
  }

  confirmEmail(){
    this.authService.confirmEmail(this.userId, this.token).subscribe(data => { this.emailConfirmed = true; });
  }

  confirmNewEmail(){
    console.log("sas");
    var body = {
      userId: this.userId,
      newEmail: this.newEmail,
      token: this.token
    }
    console.log(body);
    this.userService.confirmNewEmail(body).subscribe(data => { this.newEmailConfirmed = true; });
  }
}
