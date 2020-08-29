import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
        this.adminUrl = "http://localhost:58733/api/admin/users/";
    }
    getUsers() {
        return this.http.get(this.adminUrl);
    }
    getUser(id) {
        return this.http.get(this.adminUrl + id);
    }
    deleteUser(id) {
        return this.http.delete(this.adminUrl + id);
    }
    putUser(user) {
        return this.http.put(this.adminUrl, user);
    }
};
AdminService = __decorate([
    Injectable()
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map