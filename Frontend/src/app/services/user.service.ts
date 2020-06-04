import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class UserService {//experimental decorations

    private userUrl = "http://localhost:58733/api/user/";

    constructor(private fb: FormBuilder, private http: HttpClient) { }
    
    formModel = this.fb.group({
        Passwords: this.fb.group({
            OldPassword: ['', Validators.required],
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
      
    getUsers() {
        return this.http.get(this.userUrl);
    }

    getUser(id: string){
        return this.http.get(this.userUrl + id);
    }

    deleteUser(id: string){
        return this.http.delete(this.userUrl + id);
    }

    putUser(user: User){
        return this.http.put(this.userUrl, user);
    }
    
    getUserProfile() {
        return this.http.get(this.userUrl + 'profile');
    }

    changePassword(userId: string){
        var body = {
            UserId: userId,
            OldPassword: this.formModel.value.Passwords.OldPassword,
            NewPassword: this.formModel.value.Passwords.Password
          };
        return this.http.post(this.userUrl + 'changePass', body);
    }
}