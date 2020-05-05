var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        console.log("1");
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        console.log("ok");
        this.submitted = true;
        this.user = this.registerForm.value;
        console.log(this.user);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.user)
            .pipe(first())
            .subscribe(data => {
            this.router.navigate(['/'], { queryParams: { registered: true } });
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
RegistrationComponent = __decorate([
    Component({
        templateUrl: '../views/registration.component.html',
        providers: [UserService]
    })
], RegistrationComponent);
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map