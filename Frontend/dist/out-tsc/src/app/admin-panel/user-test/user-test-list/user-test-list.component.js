import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserTestListComponent = class UserTestListComponent {
    constructor(router, userTestService) {
        this.router = router;
        this.userTestService = userTestService;
    }
    ngOnInit() {
        this.loadUserTests();
    }
    loadUserTests() {
        this.userTestService.getAllUserTests()
            .subscribe((data) => {
            console.log(data);
            this.userTests = data;
        });
    }
    deleteUserTest(id) {
        var result = confirm("Вы уверены что хотите удалить этот результат?");
        if (result == true) {
            this.userTestService.deleteUserTest(id).subscribe(data => this.loadUserTests());
        }
    }
};
UserTestListComponent = __decorate([
    Component({
        selector: 'app-user-test-list',
        templateUrl: './user-test-list.component.html',
        styles: []
    })
], UserTestListComponent);
export { UserTestListComponent };
//# sourceMappingURL=user-test-list.component.js.map