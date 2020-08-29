import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.userUrl = "http://localhost:58733/api/user/";
    }
    getUsers() {
        return this.http.get(this.userUrl);
    }
    getUser(id) {
        return this.http.get(this.userUrl + id);
    }
    deleteUser(id) {
        return this.http.delete(this.userUrl + id);
    }
    putUser(user) {
        return this.http.put(this.userUrl, user);
    }
    getUserProfile() {
        return this.http.get(this.userUrl + 'profile');
    }
    changePassword(body) {
        return this.http.post(this.userUrl + 'changePass', body);
    }
};
UserService = __decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map