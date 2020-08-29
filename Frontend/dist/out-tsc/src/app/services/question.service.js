import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let QuestionService = class QuestionService {
    constructor(http) {
        this.http = http;
        this.questionUrl = "http://localhost:58733/api/question";
    }
    getQuestionById(id) {
        return this.http.get(this.questionUrl + `/${id}`);
    }
    createQuestion(question) {
        console.log(question);
        return this.http.post(this.questionUrl, question);
    }
};
QuestionService = __decorate([
    Injectable()
], QuestionService);
export { QuestionService };
//# sourceMappingURL=question.service.js.map