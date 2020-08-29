import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
let AuthService = class AuthService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.BaseURI = 'http://localhost:58733/api';
        this.formModel = this.fb.group({
            UserName: ['', Validators.required],
            Email: ['', Validators.email],
            Passwords: this.fb.group({
                Password: ['', [Validators.required, Validators.minLength(6)]],
                ConfirmPassword: ['', Validators.required]
            }, { validator: this.comparePasswords })
        });
    }
    comparePasswords(fb) {
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
        return this.http.post(this.BaseURI + '/auth/register', body);
    }
    login(formData) {
        return this.http.post(this.BaseURI + '/auth/login', formData);
    }
    roleMatch(allowedRoles) {
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
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map