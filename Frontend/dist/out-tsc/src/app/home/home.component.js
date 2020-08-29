import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(router, userTestService, testService, userService) {
        this.router = router;
        this.userTestService = userTestService;
        this.testService = testService;
        this.userService = userService;
    }
    ngOnInit() {
        this.loadTests();
        this.loadUserTests();
        this.userService.getUserProfile().subscribe(res => {
            this.userDetails = res;
        }, err => {
            console.log(err);
        });
    }
    loadTests() {
        this.testService.getTests()
            .subscribe((data) => {
            this.tests = data;
        });
    }
    loadUserTests() {
        this.userTestService.getTopUserTests(10)
            .subscribe((data) => {
            this.userTests = data;
        });
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map