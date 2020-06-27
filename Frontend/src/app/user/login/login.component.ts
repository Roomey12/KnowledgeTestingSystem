import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  }

  private authWindow: Window;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.error == "Username or password is incorrect"){
          this.toastr.error('Логин или пароль введены неверно.', 'Вход не выполнен.');
        }
        else if(err.error == "Email is not confirmed"){
          this.toastr.error('Почта не подтверждена.', 'Вход не выполнен.');
        }
        else{
          this.toastr.error('Что-то пошло не так.', 'Вход не выполнен.');
        }
      }
    );
  }

  show_hide_password(){
    var input = document.getElementById('password-input');
    var eye = document.getElementById('passeye');
    if (input.getAttribute('type') == 'password') {
      eye.classList.add('view');
      input.setAttribute('type', 'text');
    } else {
      eye.classList.remove('view');
      input.setAttribute('type', 'password');
    }
    return false;
  }

  googleLogin(){
    document.location.href = "https://localhost:44340/api/auth/googlelogin";
    //this.authService.googleLogin().subscribe(data=> console.log("sas"));
  }

  facebookLogin(){
    document.location.href = "https://localhost:44340/api/auth/facebooklogin";
    //this.authService.facebookLogin().subscribe(data=> console.log("sas"));
  }
}