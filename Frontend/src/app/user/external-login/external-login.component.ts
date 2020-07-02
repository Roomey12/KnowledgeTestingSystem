import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    });
  }

  ngOnInit(): void {
    if(this.token){
      localStorage.setItem('token', this.token);
      this.router.navigateByUrl('/home');
    }
    else{
      this.toastr.error('Что-то пошло не так','Безуспешно.');
      this.router.navigateByUrl('/user/login');
    }
  }
}
