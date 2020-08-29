import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
let UserTestCreateComponent = class UserTestCreateComponent {
    constructor(userTestService, router, activeRoute) {
        this.userTestService = userTestService;
        this.router = router;
    }
    ngOnInit() {
        this.userTest = new TestResult();
    }
    create() {
        let testResult = new TestResult();
        let time = new Date();
        console.log(this.userTest.UserId);
        console.log(this.userTest.TestId);
        let userTestTime = this.userTest.Time.split(":");
        time.setMinutes(userTestTime[0]);
        time.setSeconds(userTestTime[1]);
        time.setMilliseconds(0);
        testResult.UserId = this.userTest.UserId;
        testResult.TestId = Number(this.userTest.TestId);
        testResult.Mark = Number(this.userTest.Mark);
        testResult.Time = time;
        console.log(testResult);
        this.userTestService.postTestResult(testResult).subscribe(data => this.router.navigateByUrl("/admin-panel")),
            error => {
                console.log(error);
            };
    }
};
UserTestCreateComponent = __decorate([
    Component({
        selector: 'app-user-test-create',
        templateUrl: './user-test-create.component.html',
        styles: []
    })
], UserTestCreateComponent);
export { UserTestCreateComponent };
//# sourceMappingURL=user-test-create.component.js.map