import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TestListComponent = class TestListComponent {
    constructor(router, testService) {
        this.router = router;
        this.testService = testService;
    }
    ngOnInit() {
        this.loadTests();
    }
    loadTests() {
        this.testService.getTests()
            .subscribe((data) => {
            this.tests = data;
        });
    }
    delete(id) {
        var result = confirm("Вы уверены что хотите удалить этот тест?");
        if (result == true) {
            this.testService.deleteTest(id).subscribe(data => this.loadTests());
        }
    }
};
TestListComponent = __decorate([
    Component({
        selector: 'app-test-list',
        templateUrl: './test-list.component.html',
        styles: []
    })
], TestListComponent);
export { TestListComponent };
//# sourceMappingURL=test-list.component.js.map