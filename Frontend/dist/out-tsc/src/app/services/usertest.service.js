import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserTestService = class UserTestService {
    constructor(http) {
        this.http = http;
        this.userTestUrl = "http://localhost:58733/api/usertest/";
    }
    getAllUserTests() {
        return this.http.get(this.userTestUrl);
    }
    getTopUserTests(count) {
        return this.http.get(this.userTestUrl + `top/${count}`);
    }
    getUserTestsByUserId(id) {
        return this.http.get(this.userTestUrl + `user/${id}`);
    }
    getUserTestById(id) {
        return this.http.get(this.userTestUrl + id);
    }
    postTestResult(testResult) {
        return this.http.post(this.userTestUrl, testResult);
    }
    putUserTest(testResult) {
        return this.http.put(this.userTestUrl, testResult);
    }
    deleteUserTest(id) {
        return this.http.delete(this.userTestUrl + id);
    }
};
UserTestService = __decorate([
    Injectable()
], UserTestService);
export { UserTestService };
//# sourceMappingURL=usertest.service.js.map