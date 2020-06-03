import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  options;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    };
  }
  readonly authUrl = 'http://localhost:58733/api/auth/';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', [Validators.email, Validators.required]],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  passwordsModel = this.fb.group({
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  })

  emailModel = this.fb.group({
    Email: ['', [Validators.email, Validators.required]]
  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.authUrl + 'register', body);
  }

  login(formData) {
    return this.http.post(this.authUrl + 'login', formData);
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  confirmEmail(userId: string, token: string){
    let body = JSON.stringify(token);
    return this.http.post(this.authUrl + `confirmemail/${userId}`, body, this.options);
  }

  forgotPassword(){
    let body = JSON.stringify(this.emailModel.value.Email);
    return this.http.post(this.authUrl + 'forgotpassword', body, this.options);
  }

  resetPassword(userId: string, token: string){
    var body = {
      UserId: userId,
      Password: this.passwordsModel.value.Passwords.Password,
      Token: token
    };
    return this.http.post(this.authUrl + 'resetpassword', body);
  }
}