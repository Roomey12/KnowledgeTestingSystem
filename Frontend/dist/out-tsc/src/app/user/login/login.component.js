import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.formModel = {
            UserName: '',
            Password: ''
        };
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null)
            this.router.navigateByUrl('/home');
    }
    onSubmit(form) {
        this.authService.login(form.value).subscribe((res) => {
            localStorage.setItem('token', res.token);
            this.router.navigateByUrl('/home');
        }, err => {
            if (err.status == 400)
                this.toastr.error('Incorrect username or password.', 'Authentication failed.');
            else
                console.log(err);
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map