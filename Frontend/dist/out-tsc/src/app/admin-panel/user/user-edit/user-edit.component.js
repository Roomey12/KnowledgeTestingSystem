import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserEditComponent = class UserEditComponent {
    constructor(userService, userTestService, router, activeRoute) {
        this.userService = userService;
        this.userTestService = userTestService;
        this.router = router;
        this.loaded = false;
        this.id = activeRoute.snapshot.params["id"];
    }
    ngOnInit() {
        if (this.id) {
            this.userService.getUser(this.id)
                .subscribe((data) => {
                this.user = data;
                if (this.user != null) {
                    this.loaded = true;
                }
            });
            this.loadUserTests();
        }
    }
    save() {
        this.userService.putUser(this.user).subscribe(data => this.router.navigateByUrl("/admin-panel"));
    }
    loadUserTests() {
        this.userTestService.getUserTestsByUserId(this.id)
            .subscribe((data) => {
            this.userTests = data;
            console.log(data);
        });
    }
    deleteTestResult(id) {
        var result = confirm("Вы уверены что хотите удалить результат теста?");
        if (result == true) {
            this.userTestService.deleteUserTest(id).subscribe(data => this.loadUserTests());
        }
    }
};
UserEditComponent = __decorate([
    Component({
        selector: 'app-user-edit',
        templateUrl: './user-edit.component.html',
        styles: []
    })
], UserEditComponent);
export { UserEditComponent };
//# sourceMappingURL=user-edit.component.js.map