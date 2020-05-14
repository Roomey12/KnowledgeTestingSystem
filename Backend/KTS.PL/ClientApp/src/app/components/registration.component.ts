import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
    templateUrl: '../views/registration.component.html',
    providers: [UserService]
})

export class RegistrationComponent implements OnInit {

    user: User;
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
    ) { }

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
            .subscribe(
                data => {
                    this.router.navigate(['/'], { queryParams: { registered: true } });
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}