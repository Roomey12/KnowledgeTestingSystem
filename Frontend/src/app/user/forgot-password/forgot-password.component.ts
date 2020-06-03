import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']

})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.forgotPassword().subscribe(
      data => {
        this.toastr.success('Для восстановления, перейдите по ссылке, которая была отправлена на указаную почту.', 'Успешно.');
      },
      err => {
        if (err.error == "User was not found"){
          this.toastr.error('Пользователь с такой почтой не был найден.', 'Пароль не может быть восстановлен.');
        }
        else if(err.error == "Email is not confirmed"){
          this.toastr.error('Почта не подтверждена.', 'Пароль не может быть восстановлен.');
        }
        else{
          this.toastr.error('Что-то пошло не так.', 'Пароль не может быть восстановлен.');
        }
      });
  }
}
