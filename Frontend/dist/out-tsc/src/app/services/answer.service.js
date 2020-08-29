import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AnswerService = class AnswerService {
    constructor(http) {
        this.http = http;
        this.answerUrl = "http://localhost:58733/api/answer";
    }
    getAnswerById(id) {
        return this.http.get(this.answerUrl + `/${id}`);
    }
    createAnswer(answer) {
        console.log(answer);
        return this.http.post(this.answerUrl, answer);
    }
};
AnswerService = __decorate([
    Injectable()
], AnswerService);
export { AnswerService };
//# sourceMappingURL=answer.service.js.map