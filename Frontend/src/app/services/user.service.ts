import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:58733/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
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
    return this.http.post(this.BaseURI + '/Users/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/Users/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }

  getUserTests(){
    return this.http.get(this.BaseURI + '/UserProfile/usertests');
  }

  getUserTestsByUserId(id: string){
    return this.http.get(this.BaseURI + '/UserProfile/usertests/' + id);
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
}