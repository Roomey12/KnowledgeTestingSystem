import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserEditComponent = class UserEditComponent {
    constructor(adminService, router, activeRoute) {
        this.adminService = adminService;
        this.router = router;
        this.loaded = false;
        this.id = activeRoute.snapshot.params["id"];
    }
    ngOnInit() {
        if (this.id)
            this.adminService.getUser(this.id)
                .subscribe((data) => {
                this.user = data;
                console.log(this.user);
                if (this.user != null)
                    this.loaded = true;
            });
    }
    save() {
        this.adminService.putUser(this.user).subscribe(data => this.router.navigateByUrl("/admin-panel"));
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