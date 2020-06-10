import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']

})
export class ConfirmEmailComponent implements OnInit {

  userId: string;
  token: string;
  emailConfirmed: boolean;
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.activatedRoute.queryParams.subscribe(params => {
          this.userId = params['userId'];
          this.token = params['token'];
      });
  }

  ngOnInit(): void {
    this.confirmEmail();
  }

  confirmEmail(){
    this.authService.confirmEmail(this.userId, this.token).subscribe(data => { this.emailConfirmed = true; });
  }
}
