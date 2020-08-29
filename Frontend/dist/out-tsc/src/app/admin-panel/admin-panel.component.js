import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminPanelComponent = class AdminPanelComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.loadUsers();
    }
    loadUsers() {
        this.userService.getUsers()
            .subscribe((data) => {
            this.users = data;
        });
    }
};
AdminPanelComponent = __decorate([
    Component({
        selector: 'app-admin-panel',
        templateUrl: './admin-panel.component.html',
        styles: []
    })
], AdminPanelComponent);
export { AdminPanelComponent };
//# sourceMappingURL=admin-panel.component.js.map