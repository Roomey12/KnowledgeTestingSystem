import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ChangePassword } from '../models/changePassword';
let AccountComponent = class AccountComponent {
    constructor(userTestService, userService, toastr) {
        this.userTestService = userTestService;
        this.userService = userService;
        this.toastr = toastr;
        this.showChangePass = false;
    }
    ngOnInit() {
        this.userService.getUserProfile().subscribe(res => {
            this.userDetails = res;
            this.loadUserTests();
        }, err => {
            console.log(err);
        });
    }
    loadUserTests() {
        this.userTestService.getUserTestsByUserId(this.userDetails["id"])
            .subscribe((data) => {
            this.userTests = data;
        });
    }
    showChangePassword() {
        this.showChangePass = true;
    }
    changePassword() {
        this.password = new ChangePassword();
        this.password.UserId = this.userDetails["id"];
        this.password.OldPassword = document.getElementById("OldPassword").value;
        this.password.NewPassword = document.getElementById("NewPassword").value;
        this.userService.changePassword(this.password).subscribe(data => {
            this.showChangePass = false;
            this.toastr.success('Пароль был изменен!', 'Успешно!');
        });
    }
};
AccountComponent = __decorate([
    Component({
        selector: 'app-account',
        templateUrl: './account.component.html',
        styles: []
    })
], AccountComponent);
export { AccountComponent };
//# sourceMappingURL=account.component.js.map