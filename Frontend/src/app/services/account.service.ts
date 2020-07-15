import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable()
export class AccountService {

    private accountUrl = environment.apiUrl + 'account/';

    constructor(private fb: FormBuilder, private http: HttpClient) { }
    
    passwordModel = this.fb.group({
        Passwords: this.fb.group({
            OldPassword: ['', Validators.required],
            Password: ['', [Validators.required, Validators.minLength(6)]],
            ConfirmPassword: ['', Validators.required]
            }, { validator: this.comparePasswords })
    });

    usernameModel = this.fb.group({
        NewUsername: ['', Validators.required]
    });

    newEmailModel = this.fb.group({
        UserEmail: ['', [Validators.email, Validators.required]]
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
    
    changePassword(userId: string){
        let body = {
            UserId: userId,
            OldPassword: this.passwordModel.value.Passwords.OldPassword,
            NewPassword: this.passwordModel.value.Passwords.Password
        };
        return this.http.put(this.accountUrl + 'changePassword', body);
    }

    changeUsername(oldUsername:string){
        let body = {
            OldUsername: oldUsername,
            NewUsername: this.usernameModel.value.NewUsername
        };
        return this.http.put(this.accountUrl + 'changeUsername', body);
    }

    changeEmail(oldEmail: string){
        let body = {
            OldEmail: oldEmail,
            NewEmail: this.newEmailModel.value.UserEmail
        };
        return this.http.post(this.accountUrl + 'changeEmail', body);
    }

    changeProfileImage(email: string, profileImageUrl: string){
        let body = {
            Email: email,
            profileImageUrl: profileImageUrl
        };
        return this.http.put(this.accountUrl + 'changeProfileImage', body);
    }

    changeAboutMe(email: string, aboutMe: string){
        let body = {
            Email: email,
            AboutMe: aboutMe
        };
        return this.http.put(this.accountUrl + 'changeAboutMe', body);
    }

    confirmNewEmail(body){
        return this.http.post(this.accountUrl + 'confirmNewEmail', body);
    }

    getUserProfile() {
        return this.http.get(this.accountUrl + 'profile');
    }
}