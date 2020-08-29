import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegistrationComponent = class RegistrationComponent {
    constructor(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.authService.formModel.reset();
    }
    onSubmit() {
        this.authService.register().subscribe((res) => {
            if (res.succeeded) {
                this.authService.formModel.reset();
                this.toastr.success('New user created!', 'Registration successful.');
            }
            else {
                res.errors.forEach(element => {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            this.toastr.error('Username is already taken', 'Registration failed.');
                            break;
                        default:
                            this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
        }, err => {
            console.log(err);
        });
    }
};
RegistrationComponent = __decorate([
    Component({
        selector: 'app-registration',
        templateUrl: './registration.component.html',
        styleUrls: ['./registration.component.css']
    })
], RegistrationComponent);
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map