import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TestService = class TestService {
    constructor(http) {
        this.http = http;
        this.testUrl = "http://localhost:58733/api/test";
    }
    getTests() {
        return this.http.get(this.testUrl);
    }
    getTestById(id) {
        return this.http.get(this.testUrl + `/${id}`);
    }
    getTestStart(id) {
        return this.http.get(this.testUrl + `/${id}/start`);
    }
    deleteTest(id) {
        return this.http.delete(this.testUrl + `/${id}`);
    }
    putTest(test) {
        return this.http.put(this.testUrl, test);
    }
    createTest(test) {
        console.log(test);
        return this.http.post(this.testUrl, test);
    }
};
TestService = __decorate([
    Injectable()
], TestService);
export { TestService };
//# sourceMappingURL=test.service.js.map