import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
let UserTestEditComponent = class UserTestEditComponent {
    constructor(userTestService, router, activeRoute) {
        this.userTestService = userTestService;
        this.router = router;
        this.id = activeRoute.snapshot.params["id"];
    }
    ngOnInit() {
        if (this.id) {
            this.loadUserTest();
        }
    }
    save() {
        let testResult = new TestResult();
        let time = new Date();
        let userTestTime = this.userTest.Time.split(":");
        time.setMinutes(userTestTime[0]);
        time.setSeconds(userTestTime[1]);
        time.setMilliseconds(0);
        testResult.UserTestId = this.userTest.userTestId;
        testResult.UserId = this.userTest.userId;
        testResult.TestId = this.userTest.testId;
        testResult.Mark = Number(this.userTest.Mark);
        testResult.Time = time;
        console.log(testResult);
        this.userTestService.putUserTest(testResult).subscribe(data => this.router.navigateByUrl("/admin-panel"));
    }
    loadUserTest() {
        this.userTestService.getUserTestById(this.id)
            .subscribe((data) => {
            this.userTest = data;
            this.loaded = true;
        });
    }
};
UserTestEditComponent = __decorate([
    Component({
        selector: 'app-user-test-edit',
        templateUrl: './user-test-edit.component.html',
        styleUrls: []
    })
], UserTestEditComponent);
export { UserTestEditComponent };
//# sourceMappingURL=user-test-edit.component.js.map