import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public authService: AuthService, private toastr: ToastrService) { }
  pas1: string = "password";
  pas2: string = "confirmPassword";

  ngOnInit() {
    this.authService.formModel.reset(); 
  }

  onSubmit() {
    this.authService.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.authService.formModel.reset();
          this.toastr.success('Для окончания регистрации, перейдите по ссылке, которая была отправлена на указаную почту.', 'Регистрация прошла успешно.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Данный логин уже занят.','Регистрация не выполнена.');
                break;
              default:
                this.toastr.error(element.description,'Регистрация не выполнена.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
        this.toastr.error('Что-то пошло не так.', 'Регистрация не выполнена.');
      }
    );
  }

  show_hide_password(el){
    if(el == "password"){
      var input = document.getElementById('password-input');
      var eye = document.getElementById('passeye');
    }
    else{
      var input = document.getElementById('confirm-password-input');
      var eye = document.getElementById('confirm-passeye');
    }
    if (input.getAttribute('type') == 'password') {
      eye.classList.add('view');
      input.setAttribute('type', 'text');
    } else {
      eye.classList.remove('view');
      input.setAttribute('type', 'password');
    }
    return false;
  }
}