import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Test } from '../models/test';
let TestInfoComponent = class TestInfoComponent {
    constructor(testService, router, activeRoute) {
        this.testService = testService;
        this.router = router;
        this.loaded = false;
        this.test = new Test();
        this.test.testId = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    ngOnInit() {
        this.getTest();
    }
    getTest() {
        this.testService.getTestById(this.test.testId)
            .subscribe((data) => {
            this.test = data;
            this.test.maxTime = new Date(data["maxTime"]);
            if (this.test != null) {
                this.loaded = true;
            }
        });
    }
};
TestInfoComponent = __decorate([
    Component({
        selector: 'app-test-info',
        templateUrl: './test-info.component.html',
        styles: []
    })
], TestInfoComponent);
export { TestInfoComponent };
//# sourceMappingURL=test-info.component.js.map