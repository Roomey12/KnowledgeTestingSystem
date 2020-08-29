import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TestEditComponent = class TestEditComponent {
    constructor(testService, router, activeRoute) {
        this.testService = testService;
        this.router = router;
        this.id = activeRoute.snapshot.params["id"];
    }
    ngOnInit() {
        if (this.id) {
            this.loadTest();
        }
    }
    loadTest() {
        this.testService.getTestById(this.id)
            .subscribe((data) => {
            this.test = data;
            this.loaded = true;
        });
    }
    save() {
        this.testService.putTest(this.test).subscribe(data => this.router.navigateByUrl("/admin-panel"));
    }
};
TestEditComponent = __decorate([
    Component({
        selector: 'app-test-edit',
        templateUrl: './test-edit.component.html',
        styles: []
    })
], TestEditComponent);
export { TestEditComponent };
//# sourceMappingURL=test-edit.component.js.map