import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserListComponent = class UserListComponent {
    constructor(router, adminService) {
        this.router = router;
        this.adminService = adminService;
    }
    ngOnInit() {
        this.loadUsers();
    }
    loadUsers() {
        this.adminService.getUsers()
            .subscribe((data) => {
            this.users = data;
        });
    }
    delete(id) {
        var result = confirm("Вы уверены что хотите удалить этого пользователя?");
        if (result == true) {
            this.adminService.deleteUser(id).subscribe(data => this.loadUsers());
        }
    }
};
UserListComponent = __decorate([
    Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styles: []
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map