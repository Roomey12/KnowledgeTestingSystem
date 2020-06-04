import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  userId: string;
  token: string;
  emailConfirmed: boolean;
  constructor(private activatedRoute: ActivatedRoute, public authService: AuthService, private toastr: ToastrService, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
          this.userId = params['userId'];
          this.token = params['token'];
      });
  }

  ngOnInit(): void {
    this.authService.passwordsModel.reset(); 
  }
  
  onSubmit(){
    this.authService.resetPassword(this.userId, this.token).subscribe(
      (res: any) => { 
      if (res.succeeded) {
        this.router.navigateByUrl('/user/login');
        this.toastr.success('Пароль был изменен.', 'Успешно.');
      } 
      else {
        res.errors.forEach(element => {
          this.toastr.error(element.description,'Пароль не был изменен.');
        });
      }
     },
     err => {
       this.toastr.error('Что-то пошло не так.', 'Пароль не был изменен.');
     });
  }
}
