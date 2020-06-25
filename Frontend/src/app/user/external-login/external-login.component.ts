import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html',
  styleUrls: ['./external-login.component.css']

})
export class ExternalLoginComponent implements OnInit {

  token: string;
  isSuccess: boolean;

  constructor(private toastr: ToastrService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['token']){
        this.token = params['token'];
      }
      if(params['isSuccess']){
        this.isSuccess = params['isSuccess'];
      }
    });
  }

  ngOnInit(): void {
    if(this.token){
      localStorage.setItem('token', this.token);
      this.router.navigateByUrl('/home');
    }
    else{
      if(this.isSuccess){
        this.toastr.success("Для окончания регистрации, перейдите по ссылке, которая была отправлена на Вашу почту.", "Успешно.")
      }
      else{
        this.toastr.error('Что-то пошло не так','Регистрация не выполнена.');
      }
      this.router.navigateByUrl('/user/login');
    }
  }
}
