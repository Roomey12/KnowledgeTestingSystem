import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    private userUrl = environment.apiUrl + 'user/';

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

    emailModel = this.fb.group({
        UserEmail: ['', [Validators.email]]
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

    getUsersForPagination(pageNumber){
        return this.http.get(this.userUrl + `pagination?pageNumber=${pageNumber}`);
    }
    
    makeUserAdmin(user: User){
        return this.http.put(this.userUrl + 'makeAdmin', user);
    }

    makeUserCustomer(user: User){
        return this.http.put(this.userUrl + 'makeCustomer', user);
    }
    
    changePassword(userId: string){
        let body = {
            UserId: userId,
            OldPassword: this.passwordModel.value.Passwords.OldPassword,
            NewPassword: this.passwordModel.value.Passwords.Password
        };
        return this.http.put(this.userUrl + 'changePassword', body);
    }

    changeUsername(oldUsername:string){
        let body = {
            OldUsername: oldUsername,
            NewUsername: this.usernameModel.value.NewUsername
        };
        return this.http.put(this.userUrl + 'changeUsername', body);
    }

    changeEmail(oldEmail: string){
        let body = {
            OldEmail: oldEmail,
            NewEmail: this.newEmailModel.value.UserEmail
        };
        return this.http.post(this.userUrl + 'changeEmail', body);
    }

    changeProfileImage(email: string, profileImageUrl: string){
        let body = {
            Email: email,
            profileImageUrl: profileImageUrl
        };
        return this.http.put(this.userUrl + 'changeProfileImage', body);
    }

    changeAboutMe(email: string, aboutMe: string){
        let body = {
            Email: email,
            AboutMe: aboutMe
        };
        return this.http.put(this.userUrl + 'changeAboutMe', body);
    }

    confirmNewEmail(body){
        return this.http.post(this.userUrl + 'confirmNewEmail', body);
    }
}