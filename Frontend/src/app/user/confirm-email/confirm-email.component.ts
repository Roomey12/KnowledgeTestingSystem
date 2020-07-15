import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';

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

  constructor(private toastr: ToastrService, private activatedRoute: ActivatedRoute, private accountService: AccountService, private authService: AuthService) {
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
    var body = {
      userId: this.userId,
      newEmail: this.newEmail,
      token: this.token
    }
    this.accountService.confirmNewEmail(body).subscribe(data => { this.newEmailConfirmed = true; });
  }
}
